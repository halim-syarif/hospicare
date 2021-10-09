const routes = require('express').Router()


routes.get('/', (req, res)=> res.send('oksss'))
routes.get('/:id')
routes.post('/')
routes.put('/')
routes.delete('/')


module.exports = routes