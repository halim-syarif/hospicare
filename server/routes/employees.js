const routes = require('express').Router()
const EmployeeController = require('../controllers/Employee')
const { authentication, authOnlyAdmin } = require('../middlewares/auth')


routes.post('/login', EmployeeController.loginEmployee)
routes.get('/doctors', EmployeeController.getAllDoctors)
routes.get('/doctors/:poli_id', EmployeeController.getDoctorsByPoli)
routes.get('/', EmployeeController.getAllEmployeee)

routes.use(authentication, authOnlyAdmin)

routes.get('/:id', EmployeeController.getEmployeeById)
routes.post('/', EmployeeController.createEmployee)
routes.put('/:id', EmployeeController.editEmployee)
routes.delete('/:id', EmployeeController.deleteEmployee)


module.exports = routes