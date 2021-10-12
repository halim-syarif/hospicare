'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("PatientMedicines", [
      {
        MedicationId: 1,
        MedicineId: 7,
        quantity: 2,
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MedicationId: 1,
        MedicineId: 20,
        quantity: 1,
        price: 65000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MedicationId: 1,
        MedicineId: 40,
        quantity: 1,
        price: 88000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MedicationId: 2,
        MedicineId: 25,
        quantity: 1,
        price: 350000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MedicationId: 2,
        MedicineId: 38,
        quantity: 1,
        price: 125000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MedicationId: 2,
        MedicineId: 41,
        quantity: 1,
        price: 52000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("PatientMedicines", null);
  }
};
