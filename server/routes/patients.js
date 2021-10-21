const routes = require('express').Router()
const PatientController = require('../controllers/Patient')
const { authentication, authOnlyAdmin } = require('../middlewares/auth')

routes.post('/', PatientController.createPatient) // ntar bisa login
routes.post('/login', PatientController.loginPatient)

routes.use(authentication, authOnlyAdmin)

routes.get('/', PatientController.getAllPatient)
routes.get('/:id', PatientController.getPatientById)
routes.put('/:id', PatientController.editPatient)
routes.delete('/:id', PatientController.deletePatient)


module.exports = routes