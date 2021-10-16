const {Booking, DoctorSchedule, Patient, Employee, days, poli} = require('../models')

class BookingController {
  static  async fetchAllBooking(req, res, next) {
    try {
      const bookList = await Booking.findALl({
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        include: [
          {
            model: DoctorSchedule,
            required: true,
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            },
            where: {
              id: DoctorScheduleId 
            },
            include: [
              {
                model: Employee,
                required: true,
                attributes: {
                  exclude: [ 'createdAt', 'updatedAt']
                },
                include: [
                  {
                    model: Polis,
                    required: true,
                    attributes: ['name']
                  }
                ],
                where: {
                  id: EmployeeId
                }
              },
              {
                model: days,
                required: true,
                attributes: {
                  exclud: [ 'createdAt', 'updatedAt']
                },
                where: {
                  id: DayId
                }
              }
            ]
          },
          {
            model: Patient,
            required: true,
            attributes: {
              exclude: [ 'createdAt', 'updatedAt']
            },
            where: {
              id: PatientId
            }
          }
        ]
      })
      
    } catch (error) {
      next(error)
    }
  }
}

module.exports = BookingController