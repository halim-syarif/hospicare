const routes = require('express').Router()

routes.get('/')
routes.get('/:bookingId')
routes.post('/')
routes.patch('/') //change is_paid
routes.delete('/')

module.exports = routes