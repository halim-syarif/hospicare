'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking_Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Booking_Schedule.init({
    PatientId: DataTypes.INTEGER,
    DoctorScheduleId: DataTypes.INTEGER,
    booking_date: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Booking_Schedule',
  });
  return Booking_Schedule;
};