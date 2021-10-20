const app = require("../app.js");
const { MedicationHistory, Employee,Day, Medicine, Patient,DoctorSchedule, BookingSchedule,  sequelize } = require("../models");
const request = require("supertest");
const { hashPassword } = require("../helpers/bcrypt.js");
const { set } = require("../app.js");
const { queryInterface } = sequelize;

//describe here
describe("History Routes Test", () => {
    // const employeeData = [
    //     {
    //         name: "testing",
    //         email: "testing@mail.com",
    //         password: hashPassword("12345"),
    //         age: 25,
    //         gender: "male",
    //         address: "testing",
    //         role: "admin",
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //     },
    // ];
    const employeeId = [
        {
            name: "dr. Ketut Ratna Dewi Wijayanti, Sp. OG",
            email: "ratna.wijayanti@gmail.com",
            password: hashPassword('password'),
            age: 41,
            gender: 'female',
            address:'Gg. Pelajar Pejuang 45 No. 943, Bekasi',
            role: 'Admin',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: "dr. Ida Ayu Indira Mandini Manuaba, M.Biomed., Sp. OG",
            email: "indira.mandiri@gmail.com",
            password: hashPassword('password'),
            age: 38,
            gender: 'female',
            address:'Jl Raden Mataher 70, Jakarta Utara',
            role: 'Doctor',
            createdAt: new Date(),
            updatedAt: new Date()
          }
    ]
    const patientId = [
        {
            name: "Jamil Rajasa",
            age: 25,
            gender: "male",
            address: "Jl Biduri Bulan Bl N/10, Dki Jakarta",
            email: "jamilrsa@yahoo.com",
            imgUrl: 'https://www.random-name-generator.com/images/faces/male-asia/19.jpg',
            password: hashPassword('password'),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Karen Uyainah",
            age: 28,
            gender: "female",
            address: "Jl Suci 11, Dki Jakarta",
            email: "novitasari.ayu@kuswandari.asia",
            imgUrl: "https://www.random-name-generator.com/images/faces/female-asia/13.jpg",
            password: hashPassword('password'),
            createdAt: new Date(),
            updatedAt: new Date(),
          }
    ]
    const dayId = [
        {
            name: "Senin",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: "Selasa",
            createdAt: new Date(),
            updatedAt: new Date()
          }
    ]
    const doctorSchedules = [
        {
            EmployeeId: "1",
            DayId: "1",
            booking_limit: 20,
            price: 50000,
            start_hour: "08:00:00",
            end_hour: "12:00:00",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            EmployeeId: "2",
            DayId: "2",
            booking_limit: 20,
            price: 50000,
            start_hour: "08:00:00",
            end_hour: "12:00:00",
            createdAt: new Date(),
            updatedAt: new Date()
          }
    ]
    const medicines = [
        {
          name: "Parasetamol (asetaminofen)",
          price: 20000,
          description: 'menurunkan panas (antipiretik) dan meredakan nyeri otot atau sendi',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ]
    const bookingData = [
        {
            PatientId: 1,
            DoctorScheduleId: 1,
            booking_date: "2021-10-12 00:00:00",
            status: true,
            antrian: 1,
            keluhan: 'ingin melupakannya namun tak mampu',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            PatientId: 1,
            DoctorScheduleId: 2,
            booking_date: "2021-10-15 00:00:00",
            status: true,
            antrian: 1,
            keluhan: 'ingin melupakannya namun tak mampu',
            createdAt: new Date(),
            updatedAt: new Date()
          }
    ]
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

    const newHistory = {
        BookingScheduleId: 2,
        description: 'history medicine desc',
        medicine_list: [{id: 1,name: 'Ambroxol', price: 200000}]
    }

    let access_token = "";

    beforeAll((done) => {
        MedicationHistory.destroy({
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
                return Medicine.destroy({
                    where: {},
                    truncate: true,
                    cascade: true,
                    restartIdentity: true,
                })
            })
            .then(() => {
                return Patient.destroy({
                    where: {},
                    truncate: true,
                    cascade: true,
                    restartIdentity: true,
                })
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
                return DoctorSchedule.destroy({
                    where: {},
                    truncate: true,
                    cascade: true,
                    restartIdentity: true,
                })
            })
            .then(() => {
                return BookingSchedule.destroy({
                    where: {},
                    truncate: true,
                    cascade: true,
                    restartIdentity: true,
                })
            })
            .then(() => {
                return queryInterface.bulkInsert("Employees", employeeId)
            })
            .then(() => {
                return queryInterface.bulkInsert("Patients", patientId)
            })

            .then(() => {
                return queryInterface.bulkInsert("Medicines", medicines)
            })
            .then(() => {
                return queryInterface.bulkInsert("Days", dayId)
            })
            .then(() => {
                return queryInterface.bulkInsert("DoctorSchedules", doctorSchedules)
            })
            
            .then(() => {
                return queryInterface.bulkInsert("BookingSchedules", bookingData)
            })
            .then(() => {
                return queryInterface.bulkInsert(
                    "MedicationHistories",
                    historyData
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
                return queryInterface.bulkDelete("MedicationHistories",null, {});
            })
            .then(() => {
                return queryInterface.bulkDelete("BookingSchedules", null, {});
            })
            .then(() => {
                return queryInterface.bulkDelete("Patients",null, {});
            })
            .then(() => {
                return queryInterface.bulkDelete("Employees",null, {});
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

    // failed to get all history data, no access_token granted
    // test("failed to  get all histories - should error message", (done) => {
    //     request(app)
    //         .get("/history")
    //         // .set("access_token", access_token)
    //         .then((response) => {
    //             const { body, status } = response;
    //             expect(status).toBe(expect.any(Number))
    //             expect(body).toHaveProperty("message", expect.any(String))
    //             return done();
    //         });
    // });

    // findHistoryByBookingId
    test("200 Success get data history by BookingScheduleId", (done) => {
        request(app)
            .get("/history/1")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(200)
                expect(body).toHaveProperty("BookingScheduleId", expect.any(Number))
                expect(body).toHaveProperty("description", expect.any(String))
                expect(body).toHaveProperty("total_price", expect.any(Number))
                expect(body).toHaveProperty("is_paid", expect.any(Boolean))
                return done()
            })
            .catch((err) => {
                done(err)
            })
    })

    // editStatus success
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

    // editStatus failed
    test("400 Failed updated - should return array of error massage", (done) => {
        request(app)
            .patch("/history/1")
                .set("access_token", access_token)
                .send({
                    is_paid: ""
                })
                .then((response) => {
                    const { body, status }= response
                    expect(status).toBe(500)
                    expect(body).toHaveProperty("message", expect.any(String))
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
                expect(body).toHaveProperty("message", "Id not found")
                done()
            })
    })

    test("404 Failed to edit history - should return error message", (done) => {
        request(app)
            .patch("/history/99")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(404)

                expect(body).toHaveProperty("message", "Id not found")

                done()
            })
    })

    test("200 Success to get history by patientId - should return array of object", (done) => {
        request(app)
            .get("/history/patient/1")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(200)
                expect(body[0]).toHaveProperty("antrian", expect.any(Number))
                expect(body[0]).toHaveProperty("keluhan", expect.any(String))
                expect(body[0]).toHaveProperty("DoctorSchedule", expect.any(Object))
                done()
            })
    })

    test("404 Failed to get history by PatientId - should return error message", (done) => {
        request(app)
            .get("/history/patient/99")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(404)
                expect(body).toHaveProperty("message", "Id not found")
                done()
            })
    })

    test("201 Success create new medicine history - shoul return error message", (done) => {
        request(app)
            .post("/history")
            .set("access_token", access_token)
            .send(newHistory)
            .then(({body, status}) => {
                expect(status).toBe(201)
                expect(body).toHaveProperty("message", "Medication History Patient updated")
                done()
            })
            .catch(err => {
                console.log(err);
            })
    })
});
