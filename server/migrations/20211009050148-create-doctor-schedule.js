'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Doctor_Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EmployeeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Employees',
          key: 'id'
        }
      },
      DayId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Days',
          key: 'id'
        }
      },
      booking_limit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      start_hour: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end_hour: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Doctor_Schedules');
  }
};