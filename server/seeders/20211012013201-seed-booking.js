'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("BookingSchedules", [
      {
        PatientId: 1,
        DoctorScheduleId: 90,
        booking_date: "2021-10-12 00:00:00",
        keluhan: 'Pusing, mual, dan muntah',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 1,
        DoctorScheduleId: 23,
        booking_date: "2021-10-15 00:00:00",
        keluhan: 'Nyeri di perut bagian atas atau ulu hati',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 1,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Kehilangan nafsu makan',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 2,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Demam, menggigil, dan sering berkeringat',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 3,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Napas berat atau terasa sesak, bahkan ketika sedang istirahat',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 4,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Nyeri dada yang bertambah parah ketika batuk',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 5,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Batuk kering atau batuk yang disertai dahak berwarna kuning',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 6,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Penurunan atau berkurangnya penciuman',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 7,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Mata perih dan terasa panas',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 8,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Infeksi, luka, dan memar sulit sembuh',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 9,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Detak jantung lebih cepat atau berdebar.',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 10,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'sering merasa lapar, sering lemas',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 11,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Keringat berlebih, sesak napas',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 12,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'sering merasa lemas',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 13,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Nyeri di perut bagian atas atau ulu hati',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 14,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Pusing, mual, dan muntah',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 15,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Nyeri di bagian dada, tulang rusuk bagian bawah',
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
