const routes = require('express').Router()
const history = require("../controllers/History")

routes.get('/', history.showAll)
routes.get('/:BookingScheduleId', history.findHistoryByBookingId)
// routes.post('/')
routes.patch('/:id', history.editStatus) //change is_paid
routes.delete('/:id', history.deleteHistory)

module.exports = routes