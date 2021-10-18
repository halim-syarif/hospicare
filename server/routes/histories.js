const routes = require('express').Router()
const history = require("../controllers/History")

routes.get('/', history.showAll)
routes.get('/:BookingScheduleId', history.findHistoryByBookingId)
routes.get('/patient/:patientId', history.findHistoryByPatientId)
routes.patch('/:id', history.editStatus) //change is_paid
routes.post('/', history.createHistory)

module.exports = routes