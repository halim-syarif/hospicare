'use strict';
const { hashPassword } = require("../helpers/bcrypt");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.hasMany(models.BookingSchedule, {foreignKey: 'PatientId'})
      // Patient.belongsToMany(models.DoctorSchedule, {through: 'BookingSchedules'})
    }
  };
  Patient.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    age: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    gender: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    imgUrl: {
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        instance.password = hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};