const app = require("../app.js");
const { Patient, sequelize } = require("../models");
const request = require("supertest");
const { queryInterface } = sequelize;

