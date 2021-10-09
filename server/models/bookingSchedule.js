'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BookingSchedule.init({
    PatientId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    DoctorScheduleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    booking_date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    status: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate(item){
        item.status = false
      }
    },
    sequelize,
    modelName: 'BookingSchedule',
  });
  return BookingSchedule;
};