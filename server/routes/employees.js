const routes = require('express').Router()
const EmployeeController = require('../controllers/Employee')


routes.post('/login', EmployeeController.loginEmployee)
routes.get('/')
routes.get('/:id')
routes.get('/doctors')
routes.get('/doctors/:poli')
routes.post('/doctors')
routes.put('/')
routes.delete('/')


module.exports = routes