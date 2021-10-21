const app = require("../app.js");
const { sequelize, Patient } = require("../models");
const request = require("supertest");
const { hashPassword } = require("../helpers/bcrypt.js");
const { queryInterface } = sequelize;

describe("Patient Routes Test", () => {
  const employeeData = [
    {
      name: "testing",
      email: "testing@mail.com",
      password: hashPassword("12345"),
      age: 25,
      gender: "male",
      address: "testing",
      role: "Admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  const patientData = [
    {
      name: "Jamil Rajasa",
      age: 25,
      gender: "male",
      address: "Jl Biduri Bulan Bl N/10, Dki Jakarta",
      email: "jamilrsa@yahoo.com",
      password: hashPassword('password'),
      imgUrl:
        "https://www.random-name-generator.com/images/faces/male-asia/19.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Karen Uyainah",
      age: 28,
      gender: "female",
      address: "Jl Suci 11, Dki Jakarta",
      email: "novitasari.ayu@kuswandari.asia",
      password: hashPassword('password'),
      imgUrl:
        "https://www.random-name-generator.com/images/faces/female-asia/13.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Karen Uyainah",
      age: 30,
      gender: "female",
      address: "Jl Jend Sudirman 45, Jakarta Timur",
      email: "ratih.mulyani@wulandari.in",
      password: hashPassword('password'),
      imgUrl:
        "https://www.random-name-generator.com/images/faces/female-asia/04.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Maryadi Firgantoro",
      age: 35,
      gender: "male",
      address: "Proy Senen Bl IV/4, Dki Jakarta",
      email: "luwar.sinaga@yahoo.com",
      password: hashPassword('password'),
      imgUrl:
        "https://www.random-name-generator.com/images/faces/male-asia/22.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Kartika Usamah",
      age: 30,
      gender: "female",
      address: "Jl Melasti 18 A, Dki Jakarta",
      email: "adriansyah.laila@yahoo.com",
      password: hashPassword('password'),
      imgUrl:
        "https://www.random-name-generator.com/images/faces/female-asia/22.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  let access_token = "";

  beforeAll((done) => {
    Patient.destroy({
      where: {},
      truncate: true,
      cascade: true,
      restartIdentity: true,
    })
      .then(() => {
        return queryInterface.bulkInsert("Patients", patientData);
      })

      .then((_) => {
        return queryInterface.bulkInsert("Employees", employeeData);
      })
      .then(() => {
        return request(app).post("/employees/login").send({
          email: "testing@mail.com",
          password: "12345",
        });
      })
      .then((data) => {
        access_token = data.body.access_token;
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  afterAll((done) => {
    queryInterface
      .bulkDelete("Patients", {})
      .then(() => {
        return queryInterface.bulkDelete("Employees", {});
      })
      .then(() => done())
      .catch((err) => done(err));
  });

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("200 Success login - should return access_token", (done) => {
    request(app)
      .post("/patients/login")
      .send({
        email: "luwar.sinaga@yahoo.com",
        password: "password",
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("access_token", expect.any(String));
        done();
      });
  });

  test("200 Success get all patients - should return all patients data", (done) => {
    request(app)
      .get("/patients")
      .set("access_token", access_token)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("count", 5);
        expect(body).toHaveProperty("rows.length", 5);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("200 Success get all patients with limit - should return all patients data", (done) => {
    request(app)
      .get("/patients?limit=20")
      .set("access_token", access_token)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("count", 5);
        expect(body).toHaveProperty("rows.length", 5);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("200 Success get all patients with offset - should return all patients data", (done) => {
    request(app)
      .get("/patients?offset=20")
      .set("access_token", access_token)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("count", 5);
        expect(body).toHaveProperty("rows.length", 0);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("201 Success register or add patient - should return registered patients data", (done) => {
    request(app)
      .post("/patients")
      .send({
        name: "Kartika Usamah",
        age: 30,
        gender: "female",
        password: 'password',
        address: "Jl Melasti 18 A, Dki Jakarta",
        email: "adriansyah2.laila@yahoo.com",
        password: 'mantapmantap',
        imgUrl: "https://www.random-name-generator.com/images/faces/female-asia/22.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(201);
        expect(body).toHaveProperty('id', expect.any(Number))
        expect(body).toHaveProperty('email', "adriansyah2.laila@yahoo.com")
        expect(body).toHaveProperty('address', "Jl Melasti 18 A, Dki Jakarta")
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('200 Success updated - should return message data updated', (done) => {
    request(app)
      .put('/patients/2')
      .set('access_token', access_token)
      .send({
        name: "Kartika Usamah",
        age: 22,
        imgUrl: "https://www.random-name-generator.com/images/faces/female-asia/21.jpg",
      })
      .then(response => {
        const { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty('message', 'Data has been updated')
        done()
      })
  })

  test("401 Failed get all patients - failed get data without access token", (done) => {
    request(app)
      .get("/patients")
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "You must login first");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("200 Success get data patients by id - should return patients data", (done) => {
    request(app)
      .get("/patients/1")
      .set("access_token", access_token)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("name", expect.any(String));
        expect(body).toHaveProperty("email", expect.any(String));
        expect(body).toHaveProperty("BookingSchedules", expect.any(Object));
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('200 Success deleted - should return message data deleted', (done) => {
    request(app)
      .delete('/patients/2')
      .set('access_token', access_token)
      .then(response => {
        const { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty('message', 'Data has been deleted')
        done()
      })
  })

  

  test('404 login failed - password/email matched no data should return error message ', (done) => {
    request(app)
      .post('/patients/login')
      .send({
        email: 'wrongmail@maill.com',
        password: 'wrongpass'
      })
      .then(response => {
        const { body, status } = response
        expect(status).toBe(401)
        expect(body).toHaveProperty('message', 'Invalid Email/Password')
        done()
      })
      .catch(err => {
        console.log(err.name, "maaaakplungggggggggggg😂");
      })
  });
  
  test('404 login failed - gave no email/password should return message User', (done) => {
    request(app)
      .post('/patients/login')
      .send({
        email: '',
        password: ''
      })
      .then(response => {
        const { body, status } = response
        expect(status).toBe(401)
        expect(body).toHaveProperty('message', 'Email or password can\'t be empty')
        done()
      })
      .catch(err => {
        console.log(err);
        console.log(err.name, "maaaakplungggggggggggg😂");
      })
  });

  test("401 failed get data patients by id - should return error message", (done) => {
    request(app)
      .get("/patients/ndar")
      .set("access_token", access_token)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "Id Must be a Number");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  
  test("401 failed get data patients by id - should return error message", (done) => {
    request(app)
      .get("/patients/99")
      .set("access_token", access_token)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body).toHaveProperty("message", "Id not found");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("400 Failed to register or add patient - should return array of error message", (done) => {
    request(app)
      .post("/patients")
      .send({
        name: "Kartika Usamah",
        age: 30,
        gender: "female",
        address: "Jl Melasti 18 A, Dki Jakarta",
        email: "adriansyah2.laila@yahoo.com",
        imgUrl: "https://www.random-name-generator.com/images/faces/female-asia/22.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(400);
        expect(body).toHaveProperty('message', expect.any(Array))
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("401 failed edit data patients by id - should return error message", (done) => {
      request(app)
        .put("/patients/ndar")
        .set("access_token", access_token)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(401);
          expect(body).toHaveProperty("message", "Id Must be a Number");
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

  test("401 failed edit data patients by id - should return error message", (done) => {
    request(app)
      .put("/patients/99")
      .set("access_token", access_token)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body).toHaveProperty("message", "Id not found");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("400 Failed edit register or add patient - should return array of error message", (done) => {
    request(app)
      .put("/patients/1")
      .send({
        name: "Kartika Usamah",
        age: 30,
        gender: "female",
        address: "Jl Melasti 18 A, Dki Jakarta",
        email: "adriansyah2.laila@yahoo.com",
        imgUrl: "https://www.random-name-generator.com/images/faces/female-asia/22.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(401);
        expect(body).toHaveProperty('message', "You must login first")
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("401 failed delete data patients by id - should return error message", (done) => {
    request(app)
      .delete("/patients/ndar")
      .set("access_token", access_token)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "Id Must be a Number");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("404 failed delete data patients by id - should return error message", (done) => {
    request(app)
      .delete("/patients/99")
      .set("access_token", access_token)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body).toHaveProperty("message", "Id not found");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("401 failed to  get all patients - should return error message", (done) => {
    request(app)
      .get("/patients")
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(401);
        expect(body).toHaveProperty('message', "You must login first")
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('500 Get All Patient error - Should handle error', async () => {
    Patient.findAll = jest.fn().mockRejectedValue('Error')

    return request(app)
      .get('/patients')
      .set("access_token", access_token)
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.body.err).toBe(undefined)
      })
      .catch((err) => {
        console.log(err)
      })
  })

});
