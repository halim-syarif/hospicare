'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("BookingSchedules", [
      {
        PatientId: 1,
        DoctorScheduleId: 90,
        booking_date: "2021-10-12 00:00:00",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 1,
        DoctorScheduleId: 23,
        booking_date: "2021-10-15 00:00:00",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 1,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 2,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 3,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 4,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 5,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("BookingSchedules", null);
  }
};
