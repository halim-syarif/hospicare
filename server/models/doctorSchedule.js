'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoctorSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DoctorSchedule.hasMany(models.BookingSchedule, {foreignKey: 'DoctorScheduleId'})
      DoctorSchedule.belongsTo(models.Day, {foreignKey: 'DayId'})
      DoctorSchedule.belongsTo(models.Employee, {foreignKey: 'EmployeeId'})
    }
  };
  DoctorSchedule.init({
    EmployeeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    DayId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    booking_limit: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    start_hour: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    end_hour: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'DoctorSchedule',
  });
  return DoctorSchedule;
};