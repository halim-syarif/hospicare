'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Polis", [
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
      {
        name: "Bedah Umum",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mata",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kulit dan Kelamin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Penyakit Dalam",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "THT",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Saraf",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "umum",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Polis", null);
  }
};
