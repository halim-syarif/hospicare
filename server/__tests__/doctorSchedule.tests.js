const app = require("../app.js");
const { DoctorSchedule, sequelize, Employee, Day, Patient } = require("../models");
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

    test("200 Success get all schedules - should return all schedule data", (done) => {
        request(app)
            .get("/schedules?limit=10")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response;
                expect(status).toBe(200);
                expect(body).toHaveProperty("count", expect.any(Number));
                expect(Array.isArray(body.rows)).toBeTruthy();
                // expect(Array.isArray(body)).toBeTruthy();
                // expect(body.length).toBeGreaterThan(0);
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

    // test("200 Success get data schedule by doctorId", (done) => {
    //     request(app)
    //         .get("/schedules/1")
    //         .set("access_token", access_token)
    //         .then(response => {
    //             const { body, status } = response
    //             expect(status).toBe(200)
    //             expect(body).toHaveProperty("EmployeeId", expect.any(Number))
    //             expect(body).toHaveProperty("DayId", expect.any(Number))
    //             expect(body).toHaveProperty("booking_limit", expect.any(Number))
    //             expect(body).toHaveProperty("price", expect.any(Number))
    //             expect(body),toHaveProperty("start_hour", expect.any(String))
    //             expect(body).toHaveProperty("end_hour", expect.any(String))
    //             done()
    //         })
    //         .catch((err) => {
    //             done(err)
    //         })
    // })

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

    // test("404 Failed to get doctorSchedule by doctorId, should return error message", (done) => {
    //     request(app)
    //         .get("/schedules/99")
    //         .set("access_token", access_token)
    //         .then(response => {
    //             const { body, status } = response
    //             expect(status).toBe(404)
    //             expect(body).toHaveProperty("message", "Id not found")
    //             done()
    //         })
    //         .catch(err => {
    //             done(err)
    //         })
    // })

    // test("401 Failed to get doctorSchedule by invalidFormatId, should return error message", (done) => {
    //     request(app)
    //         .get(`/schedules/${invalidIdFormat}`)
    //         .set("access_token", access_token)
    //         .then(response => {
    //             const { body, status } = response
    //             expect(status).toBe(401)
    //             expect(body).toHaveProperty("message", "Id Must be a Number")
    //             done()
    //         })
    //         .catch(err => {
    //             done(err)
    //         })
    // })
});
