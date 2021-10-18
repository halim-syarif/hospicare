'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("BookingSchedules", [
      {
        PatientId: 1,
        DoctorScheduleId: 90,
        booking_date: "2021-10-12 00:00:00",
        keluhan: 'Pusing, mual, dan muntah',
        antrian: 1,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 2,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Demam, menggigil, dan sering berkeringat',
        antrian: 2,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 3,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Napas berat atau terasa sesak, bahkan ketika sedang istirahat',
        antrian: 3,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 4,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Nyeri dada yang bertambah parah ketika batuk',
        antrian: 4,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 5,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Batuk kering atau batuk yang disertai dahak berwarna kuning',
        antrian: 5,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 6,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Penurunan atau berkurangnya penciuman',
        antrian: 6,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 7,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Mata perih dan terasa panas',
        antrian: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 8,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Infeksi, luka, dan memar sulit sembuh',
        antrian: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 9,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Detak jantung lebih cepat atau berdebar.',
        antrian: 9,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 10,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'sering merasa lapar, sering lemas',
        antrian: 10,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 11,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Keringat berlebih, sesak napas',
        antrian: 11,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 12,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'sering merasa lemas',
        antrian: 12,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 13,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Nyeri di perut bagian atas atau ulu hati',
        antrian: 13,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 14,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Pusing, mual, dan muntah',
        antrian: 14,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 15,
        DoctorScheduleId: 90,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Nyeri di bagian dada, tulang rusuk bagian bawah',
        antrian: 15,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 1,
        DoctorScheduleId: 89,
        booking_date: "2021-10-12 00:00:00",
        keluhan: 'Pusing, mual, dan muntah',
        antrian: 1,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 2,
        DoctorScheduleId: 89,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Demam, menggigil, dan sering berkeringat',
        antrian: 2,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 3,
        DoctorScheduleId: 89,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Napas berat atau terasa sesak, bahkan ketika sedang istirahat',
        antrian: 3,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 4,
        DoctorScheduleId: 89,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Nyeri dada yang bertambah parah ketika batuk',
        antrian: 4,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 5,
        DoctorScheduleId: 89,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Batuk kering atau batuk yang disertai dahak berwarna kuning',
        antrian: 5,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 6,
        DoctorScheduleId: 89,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Penurunan atau berkurangnya penciuman',
        antrian: 6,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 7,
        DoctorScheduleId: 89,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Mata perih dan terasa panas',
        antrian: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 8,
        DoctorScheduleId: 89,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Infeksi, luka, dan memar sulit sembuh',
        antrian: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 9,
        DoctorScheduleId: 89,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Detak jantung lebih cepat atau berdebar.',
        antrian: 9,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 10,
        DoctorScheduleId: 89,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'sering merasa lapar, sering lemas',
        antrian: 10,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 11,
        DoctorScheduleId: 89,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Keringat berlebih, sesak napas',
        antrian: 11,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 12,
        DoctorScheduleId: 89,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'sering merasa lemas',
        antrian: 12,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 13,
        DoctorScheduleId: 89,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Nyeri di perut bagian atas atau ulu hati',
        antrian: 13,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 14,
        DoctorScheduleId: 89,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Pusing, mual, dan muntah',
        antrian: 14,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 15,
        DoctorScheduleId: 89,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Nyeri di bagian dada, tulang rusuk bagian bawah',
        antrian: 15,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 1,
        DoctorScheduleId: 88,
        booking_date: "2021-10-12 00:00:00",
        keluhan: 'Pusing, mual, dan muntah',
        antrian: 1,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 2,
        DoctorScheduleId: 88,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Demam, menggigil, dan sering berkeringat',
        antrian: 2,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 3,
        DoctorScheduleId: 88,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Napas berat atau terasa sesak, bahkan ketika sedang istirahat',
        antrian: 3,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 4,
        DoctorScheduleId: 88,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Nyeri dada yang bertambah parah ketika batuk',
        antrian: 4,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 5,
        DoctorScheduleId: 88,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Batuk kering atau batuk yang disertai dahak berwarna kuning',
        antrian: 5,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 6,
        DoctorScheduleId: 88,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Penurunan atau berkurangnya penciuman',
        antrian: 6,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 7,
        DoctorScheduleId: 88,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Mata perih dan terasa panas',
        antrian: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 8,
        DoctorScheduleId: 88,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Infeksi, luka, dan memar sulit sembuh',
        antrian: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 6,
        DoctorScheduleId: 87,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Penurunan atau berkurangnya penciuman',
        antrian: 1,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 7,
        DoctorScheduleId: 87,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Mata perih dan terasa panas',
        antrian: 1,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 8,
        DoctorScheduleId: 87,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Infeksi, luka, dan memar sulit sembuh',
        antrian: 3,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 9,
        DoctorScheduleId: 87,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Detak jantung lebih cepat atau berdebar.',
        antrian: 4,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 10,
        DoctorScheduleId: 87,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'sering merasa lapar, sering lemas',
        antrian: 5,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 11,
        DoctorScheduleId: 87,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Keringat berlebih, sesak napas',
        antrian: 6,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 12,
        DoctorScheduleId: 87,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'sering merasa lemas',
        antrian: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 13,
        DoctorScheduleId: 87,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Nyeri di perut bagian atas atau ulu hati',
        antrian: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 14,
        DoctorScheduleId: 87,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Pusing, mual, dan muntah',
        antrian: 9,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 15,
        DoctorScheduleId: 87,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Nyeri di bagian dada, tulang rusuk bagian bawah',
        antrian: 10,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 12,
        DoctorScheduleId: 86,
        booking_date: "2021-10-12 00:00:00",
        keluhan: 'Pusing, mual, dan muntah',
        antrian: 1,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 8,
        DoctorScheduleId: 86,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Demam, menggigil, dan sering berkeringat',
        antrian: 2,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 7,
        DoctorScheduleId: 86,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Napas berat atau terasa sesak, bahkan ketika sedang istirahat',
        antrian: 3,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 6,
        DoctorScheduleId: 86,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Nyeri dada yang bertambah parah ketika batuk',
        antrian: 4,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 9,
        DoctorScheduleId: 86,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Batuk kering atau batuk yang disertai dahak berwarna kuning',
        antrian: 5,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 10,
        DoctorScheduleId: 86,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Penurunan atau berkurangnya penciuman',
        antrian: 6,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 11,
        DoctorScheduleId: 86,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Mata perih dan terasa panas',
        antrian: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 8,
        DoctorScheduleId: 85,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Infeksi, luka, dan memar sulit sembuh',
        antrian: 1,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 2,
        DoctorScheduleId: 85,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Detak jantung lebih cepat atau berdebar.',
        antrian: 9,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 10,
        DoctorScheduleId: 85,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'sering merasa lapar, sering lemas',
        antrian: 3,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 11,
        DoctorScheduleId: 85,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Keringat berlebih, sesak napas',
        antrian: 4,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 12,
        DoctorScheduleId: 85,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'sering merasa lemas',
        antrian: 5,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 13,
        DoctorScheduleId: 85,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Nyeri di perut bagian atas atau ulu hati',
        antrian: 6,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 14,
        DoctorScheduleId: 85,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Pusing, mual, dan muntah',
        antrian: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PatientId: 15,
        DoctorScheduleId: 85,
        booking_date: "2021-10-25 00:00:00",
        keluhan: 'Nyeri di bagian dada, tulang rusuk bagian bawah',
        antrian: 8,
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
