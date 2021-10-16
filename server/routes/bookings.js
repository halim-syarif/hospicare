const BookingController = require('../controllers/Booking')

const routes = require('express').Router()

routes.get('/', BookingController.fetchAllBooking)
routes.get('/:patientId')
routes.get('/:doctorId')
routes.post('/')
routes.patch('/') //change status
routes.delete('/')

module.exports = routes