const routes = require('express').Router()

routes.get('/patients')
routes.get('/patients/:id')
routes.post('/patients')
routes.put('/patients')
routes.delete('/patients')

routes.get('/employees')
routes.get('/employees/:id')
routes.get('/employees/doctors')
routes.get('/employees/doctors/:poli')
routes.post('/employees')
routes.put('/employees')
routes.delete('/employees')

routes.get('/days')
routes.post('/days')
routes.delete('/days')

routes.get('/medicines')
routes.get('/medicines/:id')
routes.post('/medicines')
routes.put('/medicines')
routes.delete('/medicines')


routes.get('/schedule')
routes.get('/schedule/:doctorId')
routes.post('/schedule')
routes.put('/schedule')
routes.delete('/schedule')


routes.get('/bookings')
routes.get('/bookings/:patientId')
routes.get('/bookings/:doctorId')
routes.post('/bookings')
routes.patch('/bookings') //change status
routes.delete('/bookings')

routes.get('/history')
routes.get('/history/:bookingId')
routes.post('/history')
routes.patch('/history') //change is_paid
routes.delete('/history')


module.exports = routes