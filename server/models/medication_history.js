'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medication_History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Medication_History.init({
    BookingScheduleId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    total_price: DataTypes.INTEGER,
    is_paid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Medication_History',
  });
  return Medication_History;
};