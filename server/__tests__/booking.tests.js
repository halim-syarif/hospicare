const app = require("../app.js");
const { MedicationHistory, Employee,Day, Medicine, Patient,DoctorSchedule, BookingSchedule,  sequelize } = require("../models");
const request = require("supertest");
const { hashPassword } = require("../helpers/bcrypt.js");
const { set } = require("../app.js");
const { queryInterface } = sequelize;

//describe here
describe("History Routes Test", () => {
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
            name: 'jamil',
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
            booking_limit: 1,
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

    const newBooking = {
        PatientId: 1,
        DoctorScheduleId: 1,
        booking_date: new Date(),
        keluhan: 'sakit pala',
    }

    const newBooking2 = {
        PatientId: 1,
        DoctorScheduleId: 2,
        booking_date: new Date(),
        keluhan: 'sakit pala',
    }

    let access_token = "";
    let access_token_dokter = ""

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
                return request(app).post("/employees/login").send({
                    email: "indira.mandiri@gmail.com",
                    password: "password",
                });
            })
            .then((data) => {
                access_token_dokter = data.body.access_token;
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


    beforeEach(() => {
        jest.clearAllMocks()
      })

    //test here
    test("200 Success get all Bookings - should return all bookings data", (done) => {
        request(app)
            .get("/bookings/1/1/1")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response;
                expect(status).toBe(200);
                expect(Array.isArray(body)).toBeTruthy();
                return done();
            });
    });



    test("200 Success get data Booking by PatientId - should return array of data", (done) => {
        request(app)
            .get("/bookings/1/patients")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(200);
                expect(Array.isArray(body)).toBeTruthy();
                return done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("404 failed get data with invalid id - should return error message", (done) => {
        request(app)
            .get("/bookings/45/patients")
            .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(404);
                expect(body).toHaveProperty('message', 'found no patient with id = 45')
                return done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("404 failed get data with no booking by patient - should return error message", (done) => {
        request(app)
            .get("/bookings/2/patients")
            // .set("access_token", access_token)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(404);
                expect(body).toHaveProperty('message', 'no appointment data found for Karen Uyainah ')
                return done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("200 Success get data Booking by DoctorId - should return array of data", (done) => {
        request(app)
            .get("/bookings/2/doctors")
            // .set("access_token", access_token_dokter)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(200);
                expect(Array.isArray(body)).toBeTruthy();
                return done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("404 Failed get data by invalid DoctorId - should return not found message", (done) => {
        request(app)
            .get("/bookings/5/doctors")
            // .set("access_token", access_token_dokter)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(404);
                expect(body).toHaveProperty('message', 'pls join us and bring healt to our world, doc')
                return done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("404 Failed get data by DoctorId - should return not found message", (done) => {
        request(app)
            .get("/bookings/1/doctors")
            // .set("access_token", access_token_dokter)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(404);
                expect(body).toHaveProperty('message', 'jangan ngadi-ngadi lu bukan dokter juga')
                return done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("201 Success create new booking - should return booking data created", (done) => {
        request(app)
            .post("/bookings")
            .set("access_token", access_token)
            .send(newBooking)
            .then(({body, status}) => {
                expect(status).toBe(201)
                expect(body).toHaveProperty('DoctorScheduleId', 1)
                expect(body).toHaveProperty('PatientId', 1)
                expect(body).toHaveProperty('keluhan', "sakit pala")
                done()
            })
            .catch(err => {
                console.log(err);
            })
    })

    test("401 Failed create new booking reach limit - should return error message", (done) => {
        request(app)
            .post("/bookings")
            .set("access_token", access_token)
            .send(newBooking2)
            .then(({body, status}) => {
                expect(status).toBe(400)
                expect(body).toHaveProperty('message', 'booking limit reached')
                done()
            })
            .catch(err => {
                console.log(err);
            })
    })

    test("200 Success edit new booking - should return success message", (done) => {
        request(app)
            .patch("/bookings/1")
            .set("access_token", access_token)
            .send(newBooking)
            .then(({body, status}) => {
                expect(status).toBe(200)
                expect(body).toHaveProperty('message', 'succes update appointment status with id = 1')
               done()
            })
            .catch(err => {
                console.log(err);
            })
    })

    test("200 Success delete booking - should return success message", (done) => {
        request(app)
            .delete("/bookings/1")
            .set("access_token", access_token)
            .then(({body, status}) => {
                expect(status).toBe(200)
                expect(body).toHaveProperty('message', 'Delete Appointment with id = 1 has been succeed')
               done()
            })
            .catch(err => {
                console.log(err);
            })
    })

    // test("200 Succes post transaction midtrans - should return success message", (done) => {
    //     request(app)
    //         .post("/history/transaction/1")
    //         .then((response) => {
    //             const { body, status } = response
    //             expect(status).toBe(201)
    //             expect(body).toHaveProperty("token", expect.any(String))
    //             expect(body).toHaveProperty("redirect_url", expect.any(String))
    //             expect(body).toHaveProperty("orderId", expect.any(Number))
    //             return done()
    //         })
    //         .catch((err) => {
    //             done(err)
    //         })
    // })

    // test("500 Error post transaction midtrans - should return error message", (done) => {
    //     request(app)
    //         .post("/history/transaction/aaaa")
    //         .then((response) => {
    //             const { body, status } = response
    //             expect(status).toBe(500)
    //             return done()
    //         })
    //         .catch((err) => {
    //             done(err)
    //         })
    // })

    // test("200 Success get status transaction midtrans - should return trx detail", (done) => {
    //     request(app)
    //         .get("/history/transaction/2")
    //         .then((response) => {
    //             const { body, status } = response
    //             expect(status).toBe(201)
    //             expect(body).toHaveProperty("transaction_status", expect.any(String))
    //             expect(body).toHaveProperty("transaction_id", expect.any(String))
    //             expect(body).toHaveProperty("payment_type", expect.any(String))
    //             return done()
    //         })
    //         .catch((err) => {
    //             done(err)
    //         })
    // })

    // test("500 Failed get status transaction midtrans - should return error", (done) => {
    //     request(app)
    //         .get("/history/transaction/5")
    //         .then((response) => {
    //             const { status, body } = response
    //             expect(status).toBe(404)
    //             expect(body).toHaveProperty("message", "Transaction doesn't exist.")
    //             return done()
    //         })
    //         .catch((err) => {
    //             done(err)
    //         })
    // })

    // // editStatus success
    // test("200 Success updated - should return message data updated", (done) => {
    //     request(app)
    //         .patch("/history/1")
    //         .set("access_token", access_token)
    //         .send({
    //             is_paid: false
    //         })
    //         .then((response) => {
    //             const { body, status }= response
    //             expect(status).toBe(200)
    //             expect(body).toHaveProperty("message", "Data has been updated")
    //             done()
    //         })
    // })

    // // editStatus failed
    // test("400 Failed updated - should return array of error massage", (done) => {
    //     request(app)
    //         .patch("/history/1")
    //             .set("access_token", access_token)
    //             .send({
    //                 is_paid: ""
    //             })
    //             .then((response) => {
    //                 const { body, status }= response
    //                 expect(status).toBe(500)
    //                 expect(body).toHaveProperty("message", expect.any(String))
    //                 done()
    //             })
    // })

    
    // test("404 Failed to get history by BookingScheduleId - should return error message", (done) => {
    //     request(app)
    //         .get("/history/99")
    //         .set("access_token", access_token)
    //         .then((response) => {
    //             const { body, status } = response
    //             expect(status).toBe(404)
    //             expect(body).toHaveProperty("message", "Id not found")
    //             done()
    //         })
    // })

    // test("404 Failed to edit history - should return error message", (done) => {
    //     request(app)
    //         .patch("/history/99")
    //         .set("access_token", access_token)
    //         .then((response) => {
    //             const { body, status } = response
    //             expect(status).toBe(404)

    //             expect(body).toHaveProperty("message", "Id not found")

    //             done()
    //         })
    // })

    // test("200 Success to get history by patientId - should return array of object", (done) => {
    //     request(app)
    //         .get("/history/patient/1")
    //         .set("access_token", access_token)
    //         .then((response) => {
    //             const { body, status } = response
    //             expect(status).toBe(200)
    //             expect(body[0]).toHaveProperty("antrian", expect.any(Number))
    //             expect(body[0]).toHaveProperty("keluhan", expect.any(String))
    //             expect(body[0]).toHaveProperty("DoctorSchedule", expect.any(Object))
    //             done()
    //         })
    // })

    // test("404 Failed to get history by PatientId - should return error message", (done) => {
    //     request(app)
    //         .get("/history/patient/99")
    //         .set("access_token", access_token)
    //         .then((response) => {
    //             const { body, status } = response
    //             expect(status).toBe(404)
    //             expect(body).toHaveProperty("message", "Id not found")
    //             done()
    //         })
    // })

    // test("201 Success create new medicine history - shoul return error message", (done) => {
    //     request(app)
    //         .post("/history")
    //         .set("access_token", access_token)
    //         .send(newBooking)
    //         .then(({body, status}) => {
    //             expect(status).toBe(201)
    //             expect(body).toHaveProperty("message", "Medication History Patient updated")
    //             done()
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // })

    // test("500 Failed create history - should return error message", (done) => {
    //     request(app)
    //         .post("/history")
    //         .set("access_token", access_token)
    //         .send(newBooking2)
    //         .then(({body, status}) => {
    //             expect(status).toBe(500)
    //             expect(body).toHaveProperty("message", expect.any(String))
    //             done()
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // })

    test('500 Failed Get All Bookings - Should handle error', async () => {
        BookingSchedule.findAll = jest.fn().mockRejectedValue('Error')
    
        return request(app)
          .get('/bookings/5/5/5')
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
