const routes = require('express').Router()
const history = require("../controllers/History")

routes.post('/transaction/:id', history.transaction)
routes.get('/transaction/:id', history.getStatus)

routes.get('/', history.showAll)
routes.get('/:BookingScheduleId', history.findHistoryByBookingId)
routes.get('/patient/:patientId', history.findHistoryByPatientId)
routes.patch('/:id', history.editStatus) //change is_paid
routes.post('/', history.createHistory)


module.exports = routes


// https://app.sandbox.midtrans.com/snap/v2/vtweb/084db10b-ca06-44c3-a370-0420ca7c84c5?order_id=7&status_code=200&transaction_status=capture
// https://app.sandbox.midtrans.com/snap/v2/vtweb/084db10b-ca06-44c3-a370-0420ca7c84c5

