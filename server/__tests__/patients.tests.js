const app = require("../app.js");
const { Patient, sequelize } = require("../models");
const request = require("supertest");
const { queryInterface } = sequelize;

describe("Patient Routes Test", () => {
  const patientData = {
    email: "testing@mail.com",
    password: "12345",
  };

  const patientData2 = {
    email: "testagain@mail.com",
    password: "12345",
  };

  describe("POST /register - create new patient", () => {
    beforeAll((done) => {
      Patient.create(patientData2)
        .then((_) => {
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    afterAll((done) => {
      queryInterface
        .bulkDelete("Patients", {})
        .then(() => done())
        .catch((err) => done(err));
    });

    test('201 Success register - should create new patient', (done) => {
      request(app)
        .post('/register')
        .send(patientData)
        .then(response => {
          const { body, status } = response
          expect(status).toBe(201)
          expect(body).toHaveProperty('id', expect.any(Number))
          expect(body).toHaveProperty('email', patientData.email)
          done()
        })
    })

    test('400 Failed register - should return error if email is null', (done) => {
      request(app)
        .post('/register')
        .send({
          password: 'qweqwe'
        })
        .then(response => {
          const { body, status } = response
          expect(status).toBe(400)
          expect(body).toHaveProperty('message', 'patient.email cannot be null')
          done()
        })
    })

    test('400 Failed register - should return error if password is empty', (done) => {
      request(app)
        .post('/register')
        .send({
          email: 'd@mail.com',
          password:""
        })
        .then(response => {
          const { body, status } = response
          expect(status).toBe(400)
          expect(body).toHaveProperty('message', 'Password is required')
          done()
        })
    })

    test('400 Failed register - should return error if email is already used', (done) => {
      request(app)
        .post('/register')
        .send({
          email: 'seven@mail.com',
          password: '12345'
        })
        .then(response => {
          const { body, status } = response
          expect(status).toBe(400)
          expect(body).toHaveProperty('message', 'Email is already exists')
          done()
        })
    })

    test('400 Failed register - should return error if email have invalid format or  email is empty', (done) => {
      request(app)
        .post('/register')
        .send({
          email: 'samail.com',
          password: 'qweqwe'
        })
        .then(response => {
          const { body, status } = response
          expect(status).toBe(400)
          expect(body).toHaveProperty('message', 'Invalid email format')
          done()
        })
    })
  });

  describe('POST /login - patient authentication process', () => {
    beforeAll(done => {
      Patient.create(patientData)
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    afterAll(done => {
      queryInterface
        .bulkDelete('Patients', {})
        .then(() => done())
        .catch(err => done(err))
    })

    test('200 Success login - should return access_token', (done) => {
      request(app)
        .post('/login')
        .send(patientData)
        .then(response => {
          const { body, status } = response
          expect(status).toBe(200)
          expect(body).toHaveProperty('id', expect.any(Number))
          expect(body).toHaveProperty('email', patientData.email)
          expect(body).toHaveProperty('access_token', expect.any(String))
          done()
        })
    })

    test('401 Failed login - should return error', (done) => {
      request(app)
        .post('/login')
        .send({
          email: 'd@mailssss.com',
          password: 'qweqwe'
        })
        .then(response => {
          const { body, status } = response
          expect(status).toBe(401)
          expect(body).toHaveProperty('message', 'Invalid Email/Password')
          done()
        })
    })
  })
});
