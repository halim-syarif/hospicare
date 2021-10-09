'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Doctor_Schedule.init({
    EmployeeId: DataTypes.INTEGER,
    DayId: DataTypes.INTEGER,
    booking_limit: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    start_hour: DataTypes.DATE,
    end_hour: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Doctor_Schedule',
  });
  return Doctor_Schedule;
};