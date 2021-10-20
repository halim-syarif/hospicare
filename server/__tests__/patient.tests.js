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

  test("201 Success register or add patient - should return registered patients data", (done) => {
    request(app)
      .post("/patients")
      .send({
        name: "Kartika Usamah",
        age: 30,
        gender: "female",
        password: 'password',
        address: "Jl Melasti 18 A, Dki Jakarta",
        email: "adriansyah55.laila@yahoo.com",
        imgUrl: "https://www.random-name-generator.com/images/faces/female-asia/22.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(201);
        expect(body).toHaveProperty('id', expect.any(Number))
        expect(body).toHaveProperty('email', "adriansyah55.laila@yahoo.com")
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

  test('200 Login succes - should return obj with access_token and payload as a key', (done) => {
    request(app)
      .post('/patients/login')
      .send({
        email: 'adriansyah.laila@yahoo.com',
        password: 'password'
      })
      .then(response => {
        const { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty('access_token', expect.any(String)),
        expect(body).toHaveProperty('id', expect.any(Number))
        expect(body).toHaveProperty('name', expect.any(String))
        expect(body).toHaveProperty('email', expect.any(String))
        done()
      })
      .catch(err => {
        console.log(err.name, "maaaakplungggggggggggg😂");
      })
  })

  
});
