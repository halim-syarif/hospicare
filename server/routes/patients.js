const routes = require('express').Router()
const PatientController = require('../controllers/Patient')
const { authentication, authorization } = require('../middlewares/auth')


routes.use(authentication, authorization)

routes.get('/', PatientController.getAllPatient)
routes.get('/:id')
routes.post('/')
routes.put('/')
routes.delete('/')


module.exports = routes