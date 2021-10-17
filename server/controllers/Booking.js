const {BookingSchedule, DoctorSchedule, Patient, Employee, Day, Poli} = require('../models')

class BookingController {
  static  async fetchAllBooking(req, res, next) {
    try {
      const { dayid, poliid, employeeid} = req.params
      const bookList = await BookingSchedule.findAll({
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
            include: [
              {
                model: Employee,
                required: true,
                attributes: {
                  exclude: [ 'createdAt', 'updatedAt', 'password']
                },
                where: {
                  id: employeeid
                },
                include: [
                  {
                    model: Poli,
                    required: true,
                    attributes: ['name', 'id'],
                    where: {
                      id: poliid
                    }
                  }
                ],
              },
              {
                model: Day,
                required: true,
                attributes: {
                  exclud: [ 'createdAt', 'updatedAt']
                },
                where: {
                  id: dayid
                }
              }
            ]
          },
          {
            model: Patient,
            required: true,
            attributes: {
              exclude: [ 'createdAt', 'updatedAt', 'password']
            },
          }
        ]
      })
      
      res.status(200).json(bookList)
    } catch (error) {
      next(error)
    }
  }

  static async bookingByPatientId (req, res, next){
    try {
      const {patientId: PatientId} = req.params
      const findPatient = await Patient.findByPk(PatientId)
      if (!findPatient){
        throw{
          name: 'found no patient',
          code: 404,
          message: `found no patient with id = ${PatientId}`
        }
      }
      const patient = await BookingSchedule.findAll({
        where: {
          PatientId
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        include: {
          model: Patient,
          required: true,
          attributes: {
            exclude: [ 'createdAt', 'updatedAt']
          }
        }
      })

      if (patient.length === 0){
        throw{
          name: 'no appointment data for this patient',
          code: 404,
          message: `no appointment data found for ${findPatient.name} `
        }
      }
      res.status(200).json(patient)
    } catch (error) {
      next(error)
    }
  }

  static async bookingByDoctorId( req, res, next){
    try {
      const {doctorId: id} = req.params
      const doctorValidation = await Employee.findByPk(id)
      if (!doctorValidation){
        throw{
          name: 'no doctor found',
          code : 404,
          message : 'pls join us and bring healt to our world, doc'
        }
        
      }
      else if (doctorValidation.role !== 'Doctor'){
        throw{
          name: 'not a doctor',
          code: 404,
          message: 'jangan ngadi-ngadi lu bukan dokter juga'
        }
      }
      else {
        const doctor = await BookingSchedule.findAll({
          attributes: {
            exclude: [ 'createdAt', 'updatedAt']
          },
          include:[
            {
              model: DoctorSchedule,
              required: true,
              attributes: {
                exclude: [ 'createdAt', 'updatedAt']
              },
              include: [
                {
                  model: Employee,
                  required: true,
                  attributes: {
                    exclude: [ 'createdAt', 'updatedAt']
                  },
                  where: {
                    id
                  }
                }
              ]
            }
          ]
        })
        res.status(200).json(doctor)
      }
    } catch (error) {
      next(error)
    }
  }

  static async createNewBook (req, res, next){
    try {
      const {PatientId, DoctorScheduleId, booking_date} = req.body
      const antrianAmount = await BookingSchedule.findAll({
        where: {
          DoctorScheduleId
        },
        include: {
          model: DoctorSchedule,
          attributes: ['booking_limit']
        }
      })
      if(antrianAmount.length >= antrianAmount[0].DoctorSchedule.booking_limit){
        throw {name: 'bookinglimitreached'}
      }
      const antrian = antrianAmount.length + 1
      const payload = {
        PatientId,
        DoctorScheduleId,
        booking_date,
        antrian
      }
      const newAppointment = await BookingSchedule.create(payload)
      res.status(201).json(newAppointment)
    } catch (error) {
      next(error)
    }
  }

  static async editStatus(req, res, next){
    try {
      const {bookingId: id} = req.params
      const {status} = req.body
      const payload = {
        status
      }
      const findAppointment = await BookingSchedule.findByPk(id)
      if(!findAppointment){
        throw {
          name: 'no appointment found',
          code : 404,
          message: `There's no appointment with id = ${id}`
        }
      }
      const editAppStatus = await BookingSchedule.update(payload,{
        where: {
          id
        }
      })
      res.status(200).json({message: `succes update appointment status with id = ${id}`})
    } catch (error) {
      next(error)
    }
  }

  static async deleteAppointment(req, res, next){
    try {
      const {bookingId:id} = req.params
      const findAppointment = await BookingSchedule.findByPk(id)
      if(!findAppointment){
        throw {
          name: 'no appointment found',
          code : 404,
          message: `There's no appointment with id = ${id}`
        }
      }
      const deleteAPP = await BookingSchedule.destroy({
        where: {
          id
        }
      })
      res.status(200).json({message: `Delete Appointment with id = ${id} has been succeed`})
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
}

module.exports = BookingController