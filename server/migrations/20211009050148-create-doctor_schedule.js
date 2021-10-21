'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DoctorSchedules', {
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
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      DayId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Days',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
        type: Sequelize.TIME
      },
      end_hour: {
        allowNull: false,
        type: Sequelize.TIME
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
    await queryInterface.dropTable('DoctorSchedules');
  }
};