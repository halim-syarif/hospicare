'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("DoctorSchedules", [
      {
        EmployeeId: "3",
        DayId: "1",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "3",
        DayId: "2",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "3",
        DayId: "4",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "4",
        DayId: "1",
        booking_limit: 20,
        price: 50000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "4",
        DayId: "2",
        booking_limit: 20,
        price: 50000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "4",
        DayId: "4",
        booking_limit: 20,
        price: 50000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "5",
        DayId: "3",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "5",
        DayId: "4",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "5",
        DayId: "5",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "6",
        DayId: "6",
        booking_limit: 10,
        price: 70000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "6",
        DayId: "7",
        booking_limit: 10,
        price: 70000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "7",
        DayId: "1",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "7",
        DayId: "2",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "7",
        DayId: "3",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "8",
        DayId: "1",
        booking_limit: 20,
        price: 50000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "8",
        DayId: "2",
        booking_limit: 20,
        price: 50000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "8",
        DayId: "4",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "9",
        DayId: "3",
        booking_limit: 20,
        price: 50000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "9",
        DayId: "4",
        booking_limit: 20,
        price: 50000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "9",
        DayId: "5",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "10",
        DayId: "6",
        booking_limit: 25,
        price: 70000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "10",
        DayId: "7",
        booking_limit: 25,
        price: 70000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "11",
        DayId: "1",
        booking_limit: 20,
        price: 250000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "11",
        DayId: "2",
        booking_limit: 20,
        price: 250000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "11",
        DayId: "3",
        booking_limit: 20,
        price: 250000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "12",
        DayId: "1",
        booking_limit: 20,
        price: 250000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "12",
        DayId: "2",
        booking_limit: 20,
        price: 250000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "12",
        DayId: "4",
        booking_limit: 20,
        price: 250000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "13",
        DayId: "3",
        booking_limit: 20,
        price: 250000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "13",
        DayId: "4",
        booking_limit: 20,
        price: 250000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "13",
        DayId: "5",
        booking_limit: 20,
        price: 250000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "14",
        DayId: "6",
        booking_limit: 15,
        price: 250000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "14",
        DayId: "7",
        booking_limit: 15,
        price: 250000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "15",
        DayId: "6",
        booking_limit: 15,
        price: 250000,
        start_hour: "13:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "15",
        DayId: "7",
        booking_limit: 15,
        price: 250000,
        start_hour: "13:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "16",
        DayId: "1",
        booking_limit: 5,
        price: 2500000,
        start_hour: "08:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "16",
        DayId: "4",
        booking_limit: 5,
        price: 2500000,
        start_hour: "08:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "17",
        DayId: "2",
        booking_limit: 5,
        price: 2500000,
        start_hour: "08:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "17",
        DayId: "5",
        booking_limit: 5,
        price: 2500000,
        start_hour: "08:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "18",
        DayId: "3",
        booking_limit: 5,
        price: 2500000,
        start_hour: "08:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "18",
        DayId: "6",
        booking_limit: 5,
        price: 2500000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "19",
        DayId: "1",
        booking_limit: 25,
        price: 100000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "19",
        DayId: "2",
        booking_limit: 25,
        price: 100000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "19",
        DayId: "3",
        booking_limit: 25,
        price: 100000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "20",
        DayId: "1",
        booking_limit: 25,
        price: 100000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "20",
        DayId: "2",
        booking_limit: 25,
        price: 100000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "20",
        DayId: "3",
        booking_limit: 25,
        price: 100000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "21",
        DayId: "4",
        booking_limit: 25,
        price: 100000,
        start_hour: "09:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "21",
        DayId: "5",
        booking_limit: 25,
        price: 100000,
        start_hour: "09:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "22",
        DayId: "1",
        booking_limit: 25,
        price: 100000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "22",
        DayId: "2",
        booking_limit: 25,
        price: 100000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "22",
        DayId: "3",
        booking_limit: 25,
        price: 100000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "23",
        DayId: "1",
        booking_limit: 25,
        price: 100000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "23",
        DayId: "2",
        booking_limit: 25,
        price: 100000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "23",
        DayId: "3",
        booking_limit: 25,
        price: 100000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "24",
        DayId: "4",
        booking_limit: 25,
        price: 100000,
        start_hour: "09:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "24",
        DayId: "5",
        booking_limit: 25,
        price: 100000,
        start_hour: "09:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "25",
        DayId: "1",
        booking_limit: 20,
        price: 200000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "25",
        DayId: "2",
        booking_limit: 20,
        price: 200000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "25",
        DayId: "3",
        booking_limit: 20,
        price: 200000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "26",
        DayId: "1",
        booking_limit: 20,
        price: 200000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "26",
        DayId: "2",
        booking_limit: 20,
        price: 200000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "26",
        DayId: "3",
        booking_limit: 20,
        price: 200000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "27",
        DayId: "4",
        booking_limit: 25,
        price: 200000,
        start_hour: "09:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "27",
        DayId: "5",
        booking_limit: 25,
        price: 200000,
        start_hour: "09:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "28",
        DayId: "4",
        booking_limit: 15,
        price: 250000,
        start_hour: "09:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "28",
        DayId: "5",
        booking_limit: 15,
        price: 250000,
        start_hour: "09:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "29",
        DayId: "1",
        booking_limit: 20,
        price: 200000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "29",
        DayId: "2",
        booking_limit: 20,
        price: 200000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "29",
        DayId: "3",
        booking_limit: 20,
        price: 200000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "30",
        DayId: "1",
        booking_limit: 20,
        price: 200000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "30",
        DayId: "2",
        booking_limit: 20,
        price: 200000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "30",
        DayId: "3",
        booking_limit: 20,
        price: 200000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "31",
        DayId: "4",
        booking_limit: 25,
        price: 200000,
        start_hour: "09:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "31",
        DayId: "5",
        booking_limit: 25,
        price: 200000,
        start_hour: "09:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "32",
        DayId: "1",
        booking_limit: 10,
        price: 300000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "32",
        DayId: "2",
        booking_limit: 10,
        price: 300000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "32",
        DayId: "3",
        booking_limit: 10,
        price: 300000,
        start_hour: "08:00:00",
        end_hour: "13:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "33",
        DayId: "1",
        booking_limit: 10,
        price: 300000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "33",
        DayId: "2",
        booking_limit: 10,
        price: 300000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "33",
        DayId: "3",
        booking_limit: 10,
        price: 300000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "34",
        DayId: "4",
        booking_limit: 15,
        price: 300000,
        start_hour: "09:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "34",
        DayId: "5",
        booking_limit: 15,
        price: 300000,
        start_hour: "09:00:00",
        end_hour: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "35",
        DayId: "1",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "35",
        DayId: "2",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "35",
        DayId: "4",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "36",
        DayId: "1",
        booking_limit: 20,
        price: 50000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "36",
        DayId: "2",
        booking_limit: 20,
        price: 50000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "36",
        DayId: "4",
        booking_limit: 20,
        price: 50000,
        start_hour: "13:00:00",
        end_hour: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "37",
        DayId: "3",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "37",
        DayId: "4",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "37",
        DayId: "5",
        booking_limit: 20,
        price: 50000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "38",
        DayId: "6",
        booking_limit: 10,
        price: 70000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        EmployeeId: "38",
        DayId: "7",
        booking_limit: 10,
        price: 70000,
        start_hour: "08:00:00",
        end_hour: "12:00:00",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("DoctorSchedules", null);
  }
};
