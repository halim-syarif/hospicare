"use strict";
const { hashPassword } = require('../helpers/bcrypt')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Employees", [
      {
        name: "Admin",
        email: "admin@mail.com",
        password: hashPassword('password'),
        age: 30,
        gender: 'male',
        address:'Gg. Merdeka no 22 DKI Jakarta',
        role: 'Admin',
        poliId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "John Doe",
        email: "john.doe@gmail.com",
        password: hashPassword('password'),
        age: 30,
        gender: 'male',
        address:'Gg. Merdeka no 22 DKI Jakarta',
        role: 'Admin',
        poliId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
        name: "dr. Ida Ayu Indira Mandini Manuaba, M.Biomed., Sp. OG",
        email: "indira.mandiri@gmail.com",
        password: hashPassword('password'),
        age: 38,
        gender: 'female',
        address:'Jl Raden Mataher 70, Jakarta Utara',
        role: 'Doctor',
        poliId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Oka Rahmatika Noviyanti., Sp. OG",
        email: "oka.noviyanti@gmail.com",
        password: hashPassword('password'),
        age: 38,
        gender: 'female',
        address:'Jl Guru Mughni 127, Jakarta Utara',
        role: 'Doctor',
        poliId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. M. Adya F. Dilmy, Sp.OG",
        email: "adya.dilmi@gmail.com",
        password: hashPassword('password'),
        age: 35,
        gender: 'male',
        address:'Jl Gombel Permai X/254, Jakarta Utara',
        role: 'Doctor',
        poliId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Nia Kurniati, Sp.A(K)",
        email: "nia.kurniati@gmail.com",
        password: hashPassword('password'),
        age: 39,
        gender: 'female',
        address:'Jl Kalilio 17-19 Ged Unas Bl D, Dki Jakarta',
        role: 'Doctor',
        poliId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Ludi Dhyani Rahmartani, Sp.A",
        email: "dhyani.rahma@gmail.com",
        password: hashPassword('password'),
        age: 41,
        gender: 'female',
        address:'Jl Jend Basuki Rachmad 8-12 Plaza Tunjungan III Lt 3 303,Kedungdoro',
        role: 'Doctor',
        poliId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dr. dr. Murti Andriastuti, Sp.A(K)",
        email: "murti.andria@gmail.com",
        password: hashPassword('password'),
        age: 33,
        gender: 'female',
        address:'Jl Perintis Kemerdekaan, Dki Jakarta',
        role: 'Doctor',
        poliId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Yoga Devaera, Sp.A(K)",
        email: "yoga.deveara@gmail.com",
        password: hashPassword('password'),
        age: 32,
        gender: 'male',
        address:'Kel Paslaten Satu Lingk IV 95375, Dki Jakarta',
        role: 'Doctor',
        poliId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Prima Almazini, Sp.JP(K)",
        email: "prima.almazini@gmail.com",
        password: hashPassword('password'),
        age: 40,
        gender: 'male',
        address:'JL. Ahmad Yani II No. 8 G, 2nd Floor, Dki Jakarta',
        role: 'Doctor',
        poliId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Dian Zamroni, Sp.JP(K)",
        email: "dian.zamroni@gmail.com",
        password: hashPassword('password'),
        age: 45,
        gender: 'male',
        address:'Jl Ki Mangunsakoro 40, Dki Jakarta',
        role: 'Doctor',
        poliId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Hary Sakti Muliawan, PhD, Sp.JP",
        email: "hary.muliawan@gmail.com",
        password: hashPassword('password'),
        age: 40,
        gender: 'male',
        address:'Jl Patal Pusri 56, Dki Jakarta',
        role: 'Doctor',
        poliId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Siska Suridanda Danny, Sp.JP",
        email: "siska.suridanda@gmail.com",
        password: hashPassword('password'),
        age: 32,
        gender: 'female',
        address:'Jl Bajak II/7 H, Dki Jakarta',
        role: 'Doctor',
        poliId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Johannes Paulus Fernandez, Sp.JP",
        email: "johanes.paulus@gmail.com",
        password: hashPassword('password'),
        age: 35,
        gender: 'male',
        address:'Jl Legundi II/7 H, Dki Jakarta',
        role: 'Doctor',
        poliId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Tri Hening Rahayatri, Sp.B, Sp.BA",
        email: "hening.rahayati@gmail.com",
        password: hashPassword('password'),
        age: 33,
        gender: 'female',
        address:'Jl Panjang 30 C, Dki Jakarta',
        role: 'Doctor',
        poliId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Rizky Amaliah, Sp.B(K)",
        email: "rizky.amaliah@gmail.com",
        password: hashPassword('password'),
        age: 37,
        gender: 'female',
        address:'Gg Tembok 17 E, Dki Jakarta',
        role: 'Doctor',
        poliId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Ridho Ardhi Syaiful, Sp.B-KBD",
        email: "ridho.ardhi@gmail.com",
        password: hashPassword('password'),
        age: 42,
        gender: 'male',
        address:'Kel Kerobokan Br Gede,Kerobokan, Dki Jakarta',
        role: 'Doctor',
        poliId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Anissa N. Witjaksono, BMedSc(Hons)., Sp.M",
        email: "annisa.witjaksono@gmail.com",
        password: hashPassword('password'),
        age: 38,
        gender: 'female',
        address:'Jl Bekasi Tmr Km 18 16 RT 002/01, Bekasi',
        role: 'Doctor',
        poliId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Rina La Distia Nora, Ph.D, Sp.M(K)",
        email: "rina.ladistia@gmail.com",
        password: hashPassword('password'),
        age: 35,
        gender: 'female',
        address:'Jl Bekasi Barat Km 18 16 RT 002/01, Bekasi',
        role: 'Doctor',
        poliId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Syska Widyawati, Sp.M(K), M.Pd.Ked",
        email: "syska.widyawati@gmail.com",
        password: hashPassword('password'),
        age: 32,
        gender: 'female',
        address:'Jl Radio Dlm Raya 20, Bekasi',
        role: 'Doctor',
        poliId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Muthia Syarifa Yani SpKK",
        email: "muthia.syarifa@gmail.com",
        password: hashPassword('password'),
        age: 37,
        gender: 'female',
        address:'Br Petengan Kutuh Ungasan, Jakarta',
        role: 'Doctor',
        poliId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Ika Julianti SpKK",
        email: "ika.julianti@gmail.com",
        password: hashPassword('password'),
        age: 33,
        gender: 'female',
        address:'Gajahmada Plaza B/33-66, Jakarta',
        role: 'Doctor',
        poliId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Muhammad Reza Nasution SpKK",
        email: "reza.nasution@gmail.com",
        password: hashPassword('password'),
        age: 45,
        gender: 'male',
        address:'Jl Jababeka 14-A Kawasan Industri Jababeka Bl J/3-G, Cibitung',
        role: 'Doctor',
        poliId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Mita Hafsah Saraswati, Sp.PD",
        email: "mita.hafsah@gmail.com",
        password: hashPassword('password'),
        age: 36,
        gender: 'female',
        address:'Jl Kerinci 19, Dki Jakarta',
        role: 'Doctor',
        poliId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Muhammad Hafiz Aini, MD",
        email: "hafiz.aini@gmail.com",
        password: hashPassword('password'),
        age: 48,
        gender: 'male',
        address:'Jl Jend Basuki Rachmad 123, Dki Jakarta',
        role: 'Doctor',
        poliId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Hasan Maulahela, Sp.PD-KGEH",
        email: "hasan.maulahela@gmail.com",
        password: hashPassword('password'),
        age: 42,
        gender: 'male',
        address:'Jl Singosari 2 A Kompl Pharmindo, Bandung',
        role: 'Doctor',
        poliId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Adi Wijaya, Sp.PD",
        email: "adi.wijaya@gmail.com",
        password: hashPassword('password'),
        age: 36,
        gender: 'male',
        address:'Jl Tembung 28, Dki Jakarta',
        role: 'Doctor',
        poliId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Febriani Endiyarti, Sp.THT-KL",
        email: "febriani.endiyarti@gmail.com",
        password: hashPassword('password'),
        age: 34,
        gender: 'female',
        address:'Jl Lap Ros 34, Dki Jakarta',
        role: 'Doctor',
        poliId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Dumasari Siregar, Sp.THT-KL",
        email: "dumasari.siregar@gmail.com",
        password: hashPassword('password'),
        age: 44,
        gender: 'female',
        address:'Jl Tebet Brt X A 16, Dki Jakarta',
        role: 'Doctor',
        poliId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dr. dr. Mirta Hediyati Reksodiputro, Sp.THT-KL(K)",
        email: "mirta.hediyati@gmail.com",
        password: hashPassword('password'),
        age: 36,
        gender: 'female',
        address:'Jl Bungur Besar 77 Kemayoran Jakarta Pusat, Dki Jakarta',
        role: 'Doctor',
        poliId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Abdi Reza, Sp.BS",
        email: "abdi.reza@gmail.com",
        password: hashPassword('password'),
        age: 37,
        gender: 'male',
        address:'Jl Semangka 56 RT 019/056, DKI Jakarta',
        role: 'Doctor',
        poliId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Wildan Latief, Sp.BS",
        email: "wildan.latief@gmail.com",
        password: hashPassword('password'),
        age: 50,
        gender: 'male',
        address:'Jl Jatinegara Tmr III 23, Dki Jakarta',
        role: 'Doctor',
        poliId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Mohammad Triadi Wijaya, Sp.BS",
        email: "triadi.wijaya@gmail.com",
        password: hashPassword('password'),
        age: 46,
        gender: 'male',
        address:'Jl Astana Anyar 72, Jawa Barat',
        role: 'Doctor',
        poliId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Auliya Husen",
        email: "auliya.husen@gmail.com",
        password: hashPassword('password'),
        age: 41,
        gender: 'female',
        address:'Jl Ruko 1 Kentungan Condongcatur Yogyakarta',
        role: 'Doctor',
        poliId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Annisa Ramadhianita",
        email: "annisa.ramadhianita@gmail.com",
        password: hashPassword('password'),
        age: 38,
        gender: 'female',
        address:'Jl Kampung Durian 63, Jakarta Timur',
        role: 'Doctor',
        poliId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Raditya Dewangga",
        email: "raditya.dewangga@gmail.com",
        password: hashPassword('password'),
        age: 45,
        gender: 'male',
        address:'Jl TB Simatupang Kav 1 B Graha Elnusa, Dki Jakarta',
        role: 'Doctor',
        poliId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dr. Cikariska Arifin",
        email: "cikarika.arifin@gmail.com",
        password: hashPassword('password'),
        age: 46,
        gender: 'female',
        address:'Jl Mangga Dua Raya Psr Pagi Mangga Dua Bl A/188, Dki Jakarta',
        role: 'Doctor',
        poliId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Employees", null);
  },
};
