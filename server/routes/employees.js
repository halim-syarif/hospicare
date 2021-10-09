const routes = require('express').Router()

routes.get('/')
routes.get('/:id')
routes.get('/doctors')
routes.get('/doctors/:poli')
routes.post('/')
routes.put('/')
routes.delete('/')

module.exports = routes