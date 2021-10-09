const routes = require('express').Router()

routes.get('/')
routes.get('/:doctorId')
routes.post('/')
routes.put('/')
routes.delete('/')

module.exports = routes