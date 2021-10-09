'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Booking_Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PatientId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Patients',
          key: 'id'
        }
      },
      DoctorScheduleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Doctor_Schedules',
          key: 'id'
        }
      },
      booking_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Booking_Schedules');
  }
};