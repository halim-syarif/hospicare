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
    modelName: 'Doctor_Schedule',
  });
  return Doctor_Schedule;
};