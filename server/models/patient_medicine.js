'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient_Medicine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Patient_Medicine.init({
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
    modelName: 'Patient_Medicine',
  });
  return Patient_Medicine;
};