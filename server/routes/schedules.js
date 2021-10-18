const routes = require('express').Router()
const doctorSchedule = require("../controllers/schedule")

routes.get('/', doctorSchedule.showAll)
routes.get('/:id', doctorSchedule.findScheduleByID)
routes.get('/:poliid/:dayid', doctorSchedule.getScheduleByPoliDay)
// router.get('/:dayId', doctorSchedule.findScheduleByDayId)
routes.post('/', doctorSchedule.addSchedule)
routes.put('/:id', doctorSchedule.editSchedule)
routes.delete('/:id', doctorSchedule.deleteSchedule)

module.exports = routes