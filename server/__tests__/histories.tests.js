const app = require("../app.js");
const { MedicationHistory, sequelize } = require("../models");
const request = require("supertest");
const { hashPassword } = require("../helpers/bcrypt.js");
const { queryInterface } = sequelize;

//describe here
describe("History Routes Test", () => {
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
    ];
    const historyData = [
        {
            BookingScheduleId: 1,
            description: "test",
            total_price: 125,
            is_paid: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            BookingScheduleId: 2,
            description: "test2",
            total_price: 14045,
            is_paid: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];

    let access_token = "";

    beforeAll((done) => {
        MedicationHistory.destroy({
            where: {},
            truncate: true,
            cascade: true,
            restartIdentity: true,
        })
            .then(() => {
                return queryInterface.bulkInsert(
                    "MedicationHistories",
                    historyData
                );
            })
            .then(() => {
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
            .bulkDelete("Employees", {})
            .then(() => {
                return queryInterface.bulkDelete("MedicationHistories", {});
            })
            .then(() => done())
            .catch((err) => done(err));
    });

    //test here
    test("200 Success get all histories - should return all histories data", (done) => {
        request(app)
            .get("/history")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response;
                expect(status).toBe(200);
                expect(Array.isArray(body)).toBeTruthy();
                expect(body.length).toBeGreaterThan(0);
                return done();
            });
    });

    test("200 Success deleted - should return message data deleted", (done) => {
        request(app)
            .delete("/history/1")
            .set("access_token", access_token)
            .then(response => {
                const { body, status } = response
                expect(status).toBe(200)
                expect(body).toHaveProperty('message', "Data has been deleted")
                done()
            })
    })

    test("200 Success get data history by BookingScheduleId", (done) => {
        request(app)
            .get("/patients/1")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(200)
                expect(body).toHaveProperty("BookingScheduleId", expect.any(Number))
                expect(body).toHaveProperty("description", expect.any(String))
                expect(body).toHaveProperty("total_price", expect.any(Number))
                expect(body).toHaveProperty("is_paid", expect.any(Boolean))
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("200 Success updated - should return message data updated", (done) => {
        request(app)
            .patch("/history/1")
            .set("access_token", access_token)
            .send({
                is_paid: false
            })
            .then((response) => {
                const { body, status }= response
                expect(status).toBe(200)
                expect(body).toHaveProperty("message", "Data has been updated")
                done()
            })
    })

    test("404 Failed to get history by BookingScheduleId - should return error message", (done) => {
        request(app)
            .get("/history/99")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(404)
                expect(body).toHaveProperty("message", "Data not found")
                done()
            })
    })

    test("404 Failed to delete history - should return error message", (done) => {
        request(app)
            .delete("/history/99")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(404)
                expect(body).toHaveProperty("message", "Data not found")
            })
            done()
    })

    test("404 Failed to edit history - should return error message", (done) => {
        request(app)
            .patch("/history/99")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(404)
                expect(body).toHaveProperty("message", "Data not found")
                done()
            })
    })
});
