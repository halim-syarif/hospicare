const routes = require('express').Router()

routes.get('/')
routes.get('/:patientId')
routes.get('/:doctorId')
routes.post('/')
routes.patch('/') //change status
routes.delete('/')

module.exports = routes