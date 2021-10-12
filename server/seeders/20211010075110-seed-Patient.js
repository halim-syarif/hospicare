"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Patients", [
      {
        name: "Jamil Rajasa",
        age: 25,
        gender: "male",
        address: "Jl Biduri Bulan Bl N/10, Dki Jakarta",
        email: "jamilrsa@yahoo.com",
        imgUrl: 'https://www.random-name-generator.com/images/faces/male-asia/19.jpg',
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
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Karen Uyainah",
        age: 30,
        gender: "female",
        address: "Jl Jend Sudirman 45, Jakarta Timur",
        email: "ratih.mulyani@wulandari.in",
        imgUrl: "https://www.random-name-generator.com/images/faces/female-asia/04.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Maryadi Firgantoro",
        age: 35,
        gender: "male",
        address: "Proy Senen Bl IV/4, Dki Jakarta",
        email: "luwar.sinaga@yahoo.com",
        imgUrl: "https://www.random-name-generator.com/images/faces/male-asia/22.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kartika Usamah",
        age: 30,
        gender: "female",
        address: "Jl Melasti 18 A, Dki Jakarta",
        email: "adriansyah.laila@yahoo.com",
        imgUrl: "https://www.random-name-generator.com/images/faces/female-asia/22.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Patients", null);
  },
};
