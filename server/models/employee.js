'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsTo(models.Poli,{foreignKey:'poliId'})
    }
  };
  Employee.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Email is already exists'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      }
    },
    password: {
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
    role: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    poliId: DataTypes.INTEGER
  }, {
    hooks:{
      beforeCreate(employee){
        employee.password = hashPassword(employee.password)
      },
      beforeBulkUpdate(employee){
        if(employee.attributes.password){
          employee.attributes.password = hashPassword(employee.attributes.password)
        }
      }
    },
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};