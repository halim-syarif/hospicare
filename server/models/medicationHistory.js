'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicationHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MedicationHistory.belongsTo(models.BookingSchedule, {foreignKey:'BookingScheduleId'})
      MedicationHistory.hasMany(models.PatientMedicine, {foreignKey: 'MedicationId'})
    }
  };
  MedicationHistory.init({
    BookingScheduleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    total_price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    is_paid: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate(item){
        item.is_paid = false
      }
    },
    sequelize,
    modelName: 'MedicationHistory',
  });
  return MedicationHistory;
};