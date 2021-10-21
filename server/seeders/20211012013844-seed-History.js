'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("MedicationHistories", [
      {
        BookingScheduleId: 1,
        description: "Sering mengalami kecemasan dan susah tidur,Jantung berdebar atau detak jantung melambat, gejala penyakit jantung",
        total_price: 223000,
        is_paid: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookingScheduleId: 2,
        description: "Pasien didiagnosa gejala ringan penyakit jantung",
        total_price: 877000,
        is_paid: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("MedicationHistories", null);
  }
};
