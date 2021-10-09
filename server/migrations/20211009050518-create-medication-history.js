'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Medication_Histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BookingScheduleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Booking_Schedules',
          key: 'id'
        }
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      total_price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      is_paid: {
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
    await queryInterface.dropTable('Medication_Histories');
  }
};