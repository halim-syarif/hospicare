const app = require("../app.js");
const { Poli, Employee,  sequelize } = require("../models");
const request = require("supertest");
const { hashPassword } = require("../helpers/bcrypt.js");

const { queryInterface } = sequelize;

describe('Poli Routes Test', () => {
  const employeeId = [
    {
        name: "dr. Ketut Ratna Dewi Wijayanti, Sp. OG",
        email: "ratna.wijayanti@gmail.com",
        password: hashPassword('password'),
        age: 41,
        gender: 'female',
        address:'Gg. Pelajar Pejuang 45 No. 943, Bekasi',
        role: 'Doctor',
        poliId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Ida Ayu Indira Mandini Manuaba, M.Biomed., Sp. A",
        email: "indira.mandiri@gmail.com",
        password: hashPassword('password'),
        age: 38,
        gender: 'female',
        address:'Jl Raden Mataher 70, Jakarta Utara',
        role: 'Doctor',
        poliId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]

  const poliId = [
    {
      name: "Kebidanan",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Anak",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]

  beforeAll((done) => { 
    Poli.destroy({
        where: {},
        truncate: true,
        cascade: true,
        restartIdentity: true,
    })
        .then(() => {
            return Employee.destroy({
                where: {},
                truncate: true,
                cascade: true,
                restartIdentity: true,
            })
        })
        .then(() => {
            return queryInterface.bulkInsert("Polis", poliId)
        })
        .then(() => {
            return queryInterface.bulkInsert("Employees", employeeId)
        })
        .then( _ => {
          done()
        })
        .catch((err) => {
            done(err);
        });
  });

  afterAll((done) => {
    queryInterface
        .bulkDelete("Employees", {})
        .then(() => {
            return queryInterface.bulkDelete("Polis",null, {});
        })
        .then(() => done())
        .catch((err) => done(err));
  });

  test('200 success get all poli data - should return array of obj', (done) => {
      request(app)
        .get('/poli')
        .then(({body, status}) => {
          expect(status).toBe(200)
          expect(Array.isArray(body)).toBeTruthy();
          expect(body.length).toBeGreaterThan(0);
          return done();
        })
  });

  test('500 Get All Poli error - Should handle error', async () => {
    Poli.findAll = jest.fn().mockRejectedValue('Error')

    return request(app)
      .get('/poli')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.body.err).toBe(undefined)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  
});
