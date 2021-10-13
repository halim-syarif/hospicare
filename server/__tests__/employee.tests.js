const app = require("../app.js");
const { Employee, Poli, sequelize } = require("../models");
const request = require("supertest");
const { hashPassword } = require("../helpers/bcrypt.js");
const { queryInterface } = sequelize;

describe("employee Routes Test", () => {
  const poliData = [
    {
      name: "Kebidanan",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Anak/Pediatrik",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Jantung/Cardiologist",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Bedah Umum",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Mata",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  const employeeData = [
    {
      name: "testing",
      email: "testing@mail.com",
      password: hashPassword("12345"),
      age: 25,
      gender: "male",
      address: "testing",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "testing2",
      email: "testing2@mail.com",
      password: hashPassword("12345"),
      age: 25,
      gender: "male",
      address: "testing",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "testing3",
      email: "testing3@mail.com",
      password: hashPassword("12345"),
      age: 25,
      gender: "male",
      address: "testing",
      role: "Doctor",
      poliId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "testing4",
      email: "testing4@mail.com",
      password: hashPassword("12345"),
      age: 25,
      gender: "male",
      address: "testing",
      role: "Doctor",
      poliId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "testing5",
      email: "testing5@mail.com",
      password: hashPassword("12345"),
      age: 25,
      gender: "male",
      address: "testing",
      role: "Doctor",
      poliId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  beforeAll((done) => {
    Poli.destroy({
      where: {},
      truncate: true,
      cascade: true,
      restartIdentity: true,
    })
      .then(() => {
        return queryInterface.bulkInsert("Polis", poliData);
      })

      .then((_) => {
        return queryInterface.bulkInsert("Employees", employeeData);
      })
      .then(() => done())
      .catch((err) => {
        done(err);
      });
  });

  afterAll((done) => {
    queryInterface
      .bulkDelete("Employees", {})
      .then(() => {
        return queryInterface.bulkDelete("Polis", {});
      })
      .then(() => done())
      .catch((err) => done(err));
  });

  test("200 Success login - should return access_token", (done) => {
    request(app)
      .post("/employees/login")
      .send({
        email: "testing@mail.com",
        password: "12345",
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("access_token", expect.any(String));
        done();
      });
  });

  test("401 Failed login - should return error", (done) => {
    request(app)
      .post("/employees/login")
      .send({
        email: "d@mailssss.com",
        password: "qweqwe",
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "Invalid Email/Password");
        done();
      });
  });

  test("200 Get All Employee - should return all employee", (done) => {
    request(app)
      .get("/employees")
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("count", 5);
        expect(body).toHaveProperty("rows.length", 5);
        done();
      });
  });

  test("200 Get All Employee with limit success - should return all employee with limit item", (done) => {
    request(app)
      .get("/employees?limit=3")
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("count", 5);
        expect(body).toHaveProperty("rows.length", 3);
        done();
      });
  });

  test("200 Get All Employee with offset success - should return all employee with offset", (done) => {
    request(app)
      .get("/employees?offset=4&limit=3")
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("count", 5);
        expect(body).toHaveProperty("rows.length", 1);
        done();
      });
  });

  test("200 Get All Doctors by Poli Id - should return all Doctor by poli Id", (done) => {
    request(app)
      .get("/employees/doctors/2")
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("count", 2);
        expect(body).toHaveProperty("rows.length", 2);
        done();
      });
  });

  test("200 Get Employee By Id - should return employee by id", (done) => {
    request(app)
      .get("/employees/2")
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("name", expect.any(String));
        expect(body).toHaveProperty("email", expect.any(String));
        done();
      });
  });

  test("404 Failed get employee - should return error message", (done) => {
    request(app)
      .get("/employees/200")
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body).toHaveProperty("message", "Id not found");
        done();
      });
  });

  test("401 Failed get employee - should return error message", (done) => {
    request(app)
      .get("/employees/eeee")
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "Id Must be a Number");
        done();
      });
  });

  test('201 Success create employee - should create new employee', (done) => {
    request(app)
      .post('/employees')
      .send({
        name: "doctor",
        email: "doctor@mail.com",
        password: "12345",
        age: 25,
        gender: "male",
        address: "testing",
        role: "Doctor",
        poliId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .then(response => {
        const { body, status } = response
        expect(status).toBe(201)
        expect(body).toHaveProperty('id', expect.any(Number))
        expect(body).toHaveProperty('email', "doctor@mail.com")
        done()
      })
  })

  test('400 Failed create employee - should return error if email is null', (done) => {
    request(app)
      .post('/employees')
      .send({
        name: "doctor",
        password: "12345",
        age: 25,
        gender: "male",
        address: "testing",
        role: "Doctor",
        poliId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .then(response => {
        const { body, status } = response
        expect(status).toBe(400)
        expect(body).toHaveProperty('message', ['Employee.email cannot be null'])
        done()
      })
  })

  test('400 Failed register - should return error if email is already used', (done) => {
    request(app)
      .post('/employees')
      .send({
        name: "doctor",
        password: "12345",
        email: 'testing@mail.com',
        age: 25,
        gender: "male",
        address: "testing",
        role: "Doctor",
        poliId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .then(response => {
        const { body, status } = response
        expect(status).toBe(400)
        expect(body).toHaveProperty('message', ['Email is already exists'])
        done()
      })
  })

  test('400 Failed register - should return error if email have invalid format', (done) => {
    request(app)
      .post('/employees')
      .send({
        name: "doctor",
        password: "12345",
        email: 'testingmail.com',
        age: 25,
        gender: "male",
        address: "testing",
        role: "Doctor",
        poliId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .then(response => {
        const { body, status } = response
        expect(status).toBe(400)
        expect(body).toHaveProperty('message', ['Invalid email format'])
        done()
      })
  })

  test('200 Success updated - should return message data updated', (done) => {
    request(app)
      .put('/employees/2')
      .send({
        name: "doctor",
        password: "12345",
        age: 25,
        gender: "male",
        role: "Doctor"
      })
      .then(response => {
        const { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty('message', 'Data has been updated')
        done()
      })
  })

  test('200 Success deleted - should return message data deleted', (done) => {
    request(app)
      .delete('/employees/2')
      .then(response => {
        const { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty('message', 'Data has been deleted')
        done()
      })
  })
});
