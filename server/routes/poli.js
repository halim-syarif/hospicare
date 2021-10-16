const routes = require('express').Router()
const PoliController = require('../controllers/poli')

routes.get('/', PoliController.getAll)

module.exports = routes