'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patient_Medicines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MedicationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Medication_Histories',
          key: 'id'
        }
      },
      MedicineId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Medicines',
          key: 'id'
        }
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Patient_Medicines');
  }
};