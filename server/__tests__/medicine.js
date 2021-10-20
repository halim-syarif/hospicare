const app = require("../app.js");
const { Medicine, sequelize } = require("../models");
const { hashPassword } = require("../helpers/bcrypt.js");
const request = require("supertest");
const { queryInterface } = sequelize;

describe('medicine Routes Test', () => {
    const medicines = [
        {
          name: "Parasetamol (asetaminofen)",
          price: 20000,
          description: 'menurunkan panas (antipiretik) dan meredakan nyeri otot atau sendi',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dextromethorpan (DMP)",
          price: 25000,
          description: 'meredakan batuk kering',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ambroxol dan Bromexin (Mukolitik)",
          price: 28000,
          description: 'meredakan batuk berdahak',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Parasetamol atau Asam Mefenamat",
          price: 15000,
          description: 'meredakan sakit kepala',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Magnesium hidroksida",
          price: 30000,
          description: 'mengurangi nyeri lambung dengan menetralkan asam lambung',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Attapulgite",
          price: 40000,
          description: 'mengurangi nyeri lambung dengan menetralkan asam lambung',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "amoxicillin",
          price: 10000,
          description: 'antibiotik',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "alogliptin",
          price: 65000,
          description: 'mengobati diabetes',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Aspirin",
          price: 15000,
          description: 'mengurangi sakit kepala',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Anastrazole",
          price: 75000,
          description: 'hormon treatment',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Benzoyl peroxide",
          price: 65000,
          description: 'mengobati jerawat',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Benzydamine",
          price: 85000,
          description: 'anti-inflammatory',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bisacodyl",
          price: 20000,
          description: 'obat pencahar',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bumetanide",
          price: 400000,
          description: 'mengobati gagal jantung dan penumpukan cairan di tubuh Anda',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Carbimazole",
          price: 120000,
          description: 'mengobati tiroid yang terlalu aktif (hipertiroidisme)',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Carvedilol",
          price: 55000,
          description: 'mengobati tekanan darah tinggi (hipertensi)',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cefalexin",
          price: 30000,
          description: 'antibiotik',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cetirizine",
          price: 34000,
          description: 'Cetirizine adalah obat antihistamin yang meredakan gejala alergi.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Codeine",
          price: 87000,
          description: 'obat penghilang rasa sakit, digunakan setelah operasi atau cedera.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Diazepam",
          price: 65000,
          description: 'mengobati kecemasan, kejang otot dan kejang (kejang)',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Diclofenac",
          price: 42000,
          description: 'mengurangi pembengkakan (peradangan) dan nyeri.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Docusate",
          price: 25000,
          description: 'obat pencahar',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dosulepin",
          price: 150000,
          description: 'digunakan untuk mengobati depresi.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Enalapril",
          price: 250000,
          description: 'mengurangi tekanan darah tinggi dan untuk mencegah atau mengobati gagal jantung.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Eplerenone",
          price: 350000,
          description: 'mengurangi resiko gagal jantung / stroke',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Erythromycin",
          price: 28000,
          description: 'antibiotik',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ferrous sulfate",
          price: 38000,
          description: 'mengobati anemia',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Folic acid",
          price: 18000,
          description: 'meningkatkan sel darah merah',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Fusidic acid",
          price: 58000,
          description: 'mengobati infeksi bakteri, seperti infeksi kulit termasuk selulitis dan impetigo',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gliclazide",
          price: 28000,
          description: 'mengobati diabetes',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hydrocortisone",
          price: 128000,
          description: 'obat steroid (kortikosteroid)',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hydroxocobalamin",
          price: 78000,
          description: 'mengobati dan mencegah anemia defisiensi vitamin B12',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ibuprofen",
          price: 56000,
          description: 'mengobati berbagai sakit dan nyeri',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ketoconazole",
          price: 88000,
          description: 'mengobati infeksi kulit yang disebabkan oleh jamur (ragi)',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lactulose",
          price: 35000,
          description: 'obat pencahar',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Latanoprost",
          price: 79000,
          description: 'mengobati tekanan tinggi di dalam mata',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Linagliptin",
          price: 28000,
          description: 'Linagliptin diresepkan untuk orang yang masih memiliki gula darah tinggi',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lisinopril",
          price: 125000,
          description: 'mengobati tekanan darah tinggi dan gagal jantung.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lithium",
          price: 230000,
          description: 'jenis obat yang dikenal sebagai mood stabilizer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lorazepam",
          price: 88000,
          description: 'mengobati kecemasan dan masalah tidur',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Melatonin",
          price: 52000,
          description: 'membantu mengontrol pola tidur',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ]

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
        {
            name: "testing",
            email: "testing2@mail.com",
            password: hashPassword("12345"),
            age: 25,
            gender: "male",
            address: "testing",
            role: "Doctor",
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ]

    const limit = 10
    const offset = 5
    const id = 1
    const nonExistentId = 50
    const invalidIdFormat = 'anystring'
    const newMedicine = {
        name : 'new medicine',
        price : 10000,
        description : 'a description for the medicine'
    }
    const editMedicine = {
        name : 'edit medicine name',
        price : 20000,
        description : 'edit medicine description'
    }

    let access_token_admin = ''
    let access_token_doctor = ''

    beforeAll((done) => {
        Medicine.destroy({
            where: {},
            truncate: true,
            cascade: true,
            restartIdentity: true,
        })
            .then(() => {
                return queryInterface.bulkInsert("Medicines", medicines)
            })
            .then((_) => {
                return queryInterface.bulkInsert("Employees", employeeData);
              })
            .then(() => {
                return request(app).post("/employees/login").send({
                    email: "testing@mail.com",
                    password: "12345",
                })
            })
            .then(data => {
                access_token_admin = data.body.access_token
                return request(app).post("/employees/login").send({
                    email: "testing2@mail.com",
                    password: "12345",
                })
            })
            .then(data => {
                access_token_doctor = data.body.access_token
                done()
            })
            
            .catch(err => {
                done(err)
            })
    })

    afterAll((done) => {
        queryInterface
            .bulkDelete("Medicines", {})
            .then(() => {
                return queryInterface.bulkDelete("Employees", {})
            })
            .then(() => {
                return queryInterface.bulkDelete("Medicines", {})
            })
            .then(() => done())
            .catch((err) => done(err))
    })

    beforeEach(() => {
      jest.clearAllMocks()
    })

    test("200 Get all Medicines - should return all medecine", (done) => {
        request(app)
            .get("/medicines")
            .set('access_token', access_token_admin)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(200)
                expect(body).toHaveProperty("count", 41)
                expect(body).toHaveProperty('rows.length', 20)
                done()
            })
    })

    test("200 Get all Medicines with limit success - should return all medecine with limit item", (done) => {
        request(app)
            .get(`/medicines?limit=${limit}`)
            .set('access_token', access_token_admin)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(200)
                expect(body).toHaveProperty("count", 41)
                expect(body).toHaveProperty('rows.length', limit)
                done()
            })
    })

    test("200 Get all Medicines with offset success - should return all medecine with offset", (done) => {
        request(app)
            .get(`/medicines?limit=${limit}&offset=${offset}`)
            .set('access_token', access_token_admin)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(200)
                expect(body).toHaveProperty("count", 41)
                expect(body).toHaveProperty('rows.length', limit)
                done()
            })
    })

    // test("401 Get all Medicines - should return error", (done) => {
    //     request(app)
    //         .get("/medicines")
    //         .then((response) => {
    //             const { body, status } = response
    //             expect(status).toBe(401)
    //             expect(body).toHaveProperty("message", "You must login first")
    //             done()
    //         })
    // })

    test("200 Get Medicine by id - should return selected medicine", (done) => {
        request(app)
            .get(`/medicines/${id}`)
            .set('access_token', access_token_admin)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(200)
                expect(body).toHaveProperty("id", id)
                expect(body).toHaveProperty("name", expect.any(String))
                expect(body).toHaveProperty("price", expect.any(Number))
                expect(body).toHaveProperty("description", expect.any(String))
                done()
            })
    })

    test("401 Get Medicine by invalid id format - should return error", (done) => {
        request(app)
            .get(`/medicines/${invalidIdFormat}`)
            .set('access_token', access_token_admin)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(401)
                expect(body).toHaveProperty("message", "Id Must be a Number")
                done()
            })
    })

    test("404 Get Medicine by nonexistent id - should return error", (done) => {
        request(app)
            .get(`/medicines/${nonExistentId}`)
            .set('access_token', access_token_admin)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(404)
                expect(body).toHaveProperty("message", "Id not found")
                done()
            })
    })

    test("201 Post create medicine - should create new medicine", (done) => {
        request(app)
            .post(`/medicines`)
            .set('access_token', access_token_admin)
            .send(newMedicine)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(201)
                expect(body).toHaveProperty("id", expect.any(Number))
                expect(body).toHaveProperty("name", newMedicine.name)
                expect(body).toHaveProperty("price", newMedicine.price)
                expect(body).toHaveProperty("description", newMedicine.description)
                done()
            })
    })

    test("400 Post create medicine - should return error", (done) => {
        request(app)
            .post(`/medicines`)
            .set('access_token', access_token_admin)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(400)
                expect(body).toHaveProperty("message", [
                    "Medicine.name cannot be null",
                    "Medicine.price cannot be null",
                    "Medicine.description cannot be null"
                ])
                done()
            })
    })

    test("200 Put edit medicine - should success message", (done) => {
        request(app)
            .put(`/medicines/${id}`)
            .set('access_token', access_token_admin)
            .send(editMedicine)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(200)
                expect(body).toHaveProperty("message", "Data has been updated")
                done()
            })
    })

    test("401 Put edit medicine by invalid id format - should return error", (done) => {
        request(app)
            .put(`/medicines/${invalidIdFormat}`)
            .set('access_token', access_token_admin)
            .send(editMedicine)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(401)
                expect(body).toHaveProperty("message", "Id Must be a Number")
                done()
            })
    })

    test("404 Put edit medicine by nonexistent id - should return error", (done) => {
        request(app)
            .put(`/medicines/${nonExistentId}`)
            .set('access_token', access_token_admin)
            .send(editMedicine)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(404)
                expect(body).toHaveProperty("message", "Id not found")
                done()
            })
    })

    test("200 Delete medicine - should success message", (done) => {
            request(app)
                .delete(`/medicines/${id}`)
                .set('access_token', access_token_admin)
                .then((response) => {
                    const { body, status } = response
                    expect(status).toBe(200)
                    expect(body).toHaveProperty("message", "Data has been deleted")
                    done()
                })
    })

    test("401 Delete medicine by invalid id format - should return error", (done) => {
        request(app)
            .delete(`/medicines/${invalidIdFormat}`)
            .set('access_token', access_token_admin)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(401)
                expect(body).toHaveProperty("message", "Id Must be a Number")
                done()
            })
    })

    test("404 Delete medicine by nonexistent id - should return error", (done) => {
        request(app)
            .delete(`/medicines/${nonExistentId}`)
            .set('access_token', access_token_admin)
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(404)
                expect(body).toHaveProperty("message", "Id not found")
                done()
            })
    })

    test('500 Get All Medicine error - Should handle error', async () => {
      Medicine.findAll = jest.fn().mockRejectedValue('Error')
  
      return request(app)
        .get('/medicines')
        .set('access_token', access_token_admin)
        .then((res) => {
          expect(res.status).toBe(500)
          expect(res.body.err).toBe(undefined)
        })
        .catch((err) => {
          console.log(err)
        })
    })
})
