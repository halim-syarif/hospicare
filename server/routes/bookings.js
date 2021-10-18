const BookingController = require('../controllers/Booking')

const routes = require('express').Router()

routes.get('/:poliid/:dayid/:employeeid', BookingController.fetchAllBooking)
routes.get('/:patientId/patients', BookingController.bookingByPatientId)
routes.get('/:doctorId/doctors', BookingController.bookingByDoctorId)
routes.post('/', BookingController.createNewBook)
routes.patch('/:bookingId', BookingController.editStatus) //change status
routes.delete('/:bookingId', BookingController.deleteAppointment)

module.exports = routes