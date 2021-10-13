const routes = require('express').Router()
const errorHandler = require('../middlewares/errorhandler')
const patientsRoutes = require('./patients')
const employeesRoutes = require('./employees')
const daysRoutes = require('./days')
const medicinesRoutes = require('./medicines')
const scheduleRoutes = require('./schedules')
const bookingsRoutes = require('./bookings')
const historiesRoutes = require('./histories')


routes.use('/patients', patientsRoutes)
routes.use('/employees', employeesRoutes)
routes.use('/days', daysRoutes)
routes.use('/medicines', medicinesRoutes)
routes.use('/schedules', scheduleRoutes)
routes.use('/bookings', bookingsRoutes)
routes.use('/history', historiesRoutes)


routes.use(errorHandler)



module.exports = routes