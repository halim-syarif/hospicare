const app = require("../app.js");
const { DoctorSchedule, sequelize, Employee, Day, Patient, Poli } = require("../models");
const request = require("supertest");
const { hashPassword } = require("../helpers/bcrypt");
const { queryInterface } = sequelize;

describe("DoctorSchedule routes test", () => {
    const employeeData = [
        {
            name: "dr. Ketut Ratna Dewi Wijayanti, Sp. OG",
            email: "ratna.wijayanti@gmail.com",
            password: hashPassword("password"),
            age: 41,
            gender: "female",
            address: "Gg. Pelajar Pejuang 45 No. 943, Bekasi",
            role: "Admin",
            poliId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: "dr. Ida Ayu Indira Mandini Manuaba, M.Biomed., Sp. OG",
            email: "indira.mandiri@gmail.com",
            password: hashPassword("password"),
            age: 38,
            gender: "female",
            address: "Jl Raden Mataher 70, Jakarta Utara",
            role: "Doctor",
            poliId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];
    const dayId = [
        {
            name: "Senin",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: "Selasa",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];
    const bookingScheduleData = [
        {
            EmployeeId: 1,
            DayId: 1,
            booking_limit: 20,
            price: 50000,
            start_hour: "08:00:00",
            end_hour: "12:00:00",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            EmployeeId: 2,
            DayId: 2,
            booking_limit: 20,
            price: 50000,
            start_hour: "08:00:00",
            end_hour: "12:00:00",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];

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
        {
            name: "Jantung",
            createdAt: new Date(),
            updatedAt: new Date()
        },
    ]

    let access_token = "";
    const invalidIdFormat = "kfajfawfn";
    const newSchedule = {
        EmployeeId: 2,
        DayId: 2,
        price: 100000,
        booking_limit: 15,
        start_hour: new Date(),
        end_hour: new Date(),
    };

    const editDoctorSchedule = {
        Employee: 1,
        DayId: 1,
        price: 80000,
        booking_limit: 12,
        start_hour: new Date(),
        end_hour: new Date(),
    };

    beforeAll((done) => {
        DoctorSchedule.destroy({
            where: {},
            truncate: true,
            cascade: true,
            restartIndentity: true,
        })
            .then(() => {
                return Employee.destroy({
                    where: {},
                    truncate: true,
                    cascade: true,
                    restartIdentity: true,
                });
            })
            .then(() => {
                return Day.destroy({
                    where: {},
                    truncate: true,
                    cascade: true,
                    restartIdentity: true,
                })
            })
            .then(() => {
                return Poli.destroy({
                    where: {},
                    truncate: true,
                    cascade: true,
                    restartIdentity: true,
                })
            })
            .then(() => {
                return queryInterface.bulkInsert("Polis", poliId);
            })
            .then(() => {
                return queryInterface.bulkInsert("Employees", employeeData);
            })
            .then(() => {
                return queryInterface.bulkInsert("Days", dayId);
            })
            .then(() => {
                return queryInterface.bulkInsert(
                    "DoctorSchedules",
                    bookingScheduleData
                );
            })
            .then(() => {
                return request(app).post("/employees/login").send({
                    email: "ratna.wijayanti@gmail.com",
                    password: "password",
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
            .bulkDelete("Employees", {})
            .then(() => {
                return queryInterface.bulkDelete("Days", {});
            })
            .then(() => {
                return queryInterface.bulkDelete("DoctorSchedules", {});
            })
            .then(() => done())
            .catch((err) => done(err));
    });

    beforeEach(() => {
        jest.clearAllMocks()
      })

    test("200 Success get all schedules - should return all schedule data", (done) => {
        request(app)
            .get("/schedules?limit=10")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response;
                expect(status).toBe(200);
                expect(body).toHaveProperty("count", expect.any(Number));
                expect(Array.isArray(body.rows)).toBeTruthy();
                return done();
            });
    });

    test("200 Success get all schedules without limit - should return all schedule data", (done) => {
        request(app)
            .get("/schedules")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response;
                expect(status).toBe(200);
                expect(body).toHaveProperty("count", expect.any(Number));
                expect(Array.isArray(body.rows)).toBeTruthy();
                return done();
            });
    });

    test("200 Success get all schedules with offset - should return all schedule data", (done) => {
        request(app)
            .get("/schedules?offset=10")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response;
                expect(status).toBe(200);
                expect(body).toHaveProperty("count", expect.any(Number));
                expect(Array.isArray(body.rows)).toBeTruthy();
                return done();
            });
    });

    test("201 Success create schedule - should return created schedule", (done) => {
        request(app)
            .post("/schedules")
            .set("access_token", access_token)
            .send(newSchedule)
            .then((response) => {
                const { body, status } = response;
                expect(status).toBe(201);
                expect(body).toHaveProperty("EmployeeId", expect.any(Number));
                expect(body).toHaveProperty("DayId", expect.any(Number));
                expect(body).toHaveProperty("price", expect.any(Number));
                expect(body).toHaveProperty(
                    "booking_limit",
                    expect.any(Number)
                );
                expect(body).toHaveProperty("start_hour", expect.any(String));
                expect(body).toHaveProperty("end_hour", expect.any(String));
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    test("200 Success deleted - should return message data deleted", (done) => {
        request(app)
            .delete("/schedules/3")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response;
                expect(status).toBe(200);
                expect(body).toHaveProperty("message", "Data has been deleted");
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    test("200 Success get data schedule by doctorId", (done) => {
        request(app)
            .get("/schedules/1")
            .set("access_token", access_token)
            .then(response => {
                const { body, status } = response
                expect(status).toBe(200)
                expect(body).toHaveProperty("booking_limit", expect.any(Number))
                expect(body).toHaveProperty("price", expect.any(Number))
                expect(body).toHaveProperty("BookingSchedules", expect.any(Array))
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("200 Success get data schedule by doctor name", (done) => {
        request(app)
            .get("/schedules/doctor/dr. Ketut Ratna Dewi Wijayanti, Sp. OG")
            .set("access_token", access_token)
            .then(response => {
                const { body, status } = response
                expect(status).toBe(200)
                expect(Array.isArray(body)).toBeTruthy();
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("500 Failed get data schedule by doctorId", (done) => {
        request(app)
            .get("/schedules/eee")
            .set("access_token", access_token)
            .then(response => {
                const { body, status } = response
                expect(status).toBe(500)
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("200 Success updated - should return message data updated", (done) => {
        request(app)
            .put("/schedules/1")
            .set("access_token", access_token)
            .send(editDoctorSchedule)
            .then((response) => {
                const { body, status } = response;
                expect(status).toBe(200);
                expect(body).toHaveProperty("message", "Data has been edited");
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    test("404 Failed to delete doctorSchedule - should return error message", (done) => {
        request(app)
            .delete("/schedules/99")
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



    test("401 Failed to update doctorSchedule by invalid id format - should return error", (done) => {
        request(app)
            .put(`/schedules/${invalidIdFormat}`)
            .set('access_token', access_token)
            .send(editDoctorSchedule)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(401)
                expect(body).toHaveProperty("message", "Id Must be a Number")
                done()
            })
            .catch(err => {
                done(err)
            })
    })

    test("404 Failed to update doctorSchedule by Id - should return error message", (done) => {
        request(app)
            .put("/schedules/999")
            .set("access_token", access_token)
            .send(editDoctorSchedule)
            .then(response => {
                const { body, status } = response
                expect(status).toBe(404)
                expect(body).toHaveProperty("message", "Id not found")
                done()
            })
    })

    test("404 Failed get all schedules by Poli and day - should return error message", (done) => {
        request(app)
            .get("/schedules/100/100")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response;
                expect(status).toBe(404);
                expect(body).toHaveProperty('message', "Id not found")
                return done();
            });
    });

    test("200 Success get all schedules by Poli and day - should return all schedule data", (done) => {
        request(app)
            .get("/schedules/1/1")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response;
                expect(status).toBe(200);
                // expect(body).toHaveProperty('message', "Id not found")
                return done();
            });
    });

    test("401 failed delete booking schedule  by id - should return error message", (done) => {
        request(app)
          .delete("/schedules/ndar")
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

    test("400 Failed add booking schedule - should return array of error message", (done) => {
        request(app)
          .post("/schedules")
          .send(
            {
                EmployeeId: 2,
                booking_limit: 20,
                price: 50000,
                start_hour: "08:00:00",
                end_hour: "12:00:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            }
          )
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

    test('500 Failed Get Schedule by docter name - Should handle error', async () => {
        DoctorSchedule.findAll = jest.fn().mockRejectedValue('Error')
    
        return request(app)
          .get('/schedules/doctor/dr. Ketut')
          .set('access_token', access_token)
          .then((res) => {
            expect(res.status).toBe(500)
            expect(res.body.err).toBe(undefined)
          })
          .catch((err) => {
            console.log(err)
          })
      })

      test('500 Failed Get All Bookings - Should handle error', async () => {
        DoctorSchedule.findAll = jest.fn().mockRejectedValue('Error')
    
        return request(app)
          .get('/schedules')
          .set('access_token', access_token)
          .then((res) => {
            expect(res.status).toBe(500)
            expect(res.body.err).toBe(undefined)
          })
          .catch((err) => {
            console.log(err)
          })
      })
});
