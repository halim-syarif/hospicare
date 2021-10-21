'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Days", [
      {
        name: "Senin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Selasa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rabu",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kamis",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jumat",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sabtu",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Minggu",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Days", null);
  }
};
