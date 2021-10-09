'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientMedicine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PatientMedicine.init({
    MedicationId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    MedicineId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'PatientMedicine',
  });
  return PatientMedicine;
};