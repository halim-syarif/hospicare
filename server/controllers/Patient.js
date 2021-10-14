const { 
  Employee,
  Patient,
  BookingSchedule, 
  DoctorSchedule, 
  MedicationHistory,
  PatientMedicine,
  Medicine,
  Day } = require('../models')

class PatientController {
  static async getAllPatient(req, res, next){
    try {
      let { limit, offset } = req.query;
      if (!limit) {
        limit = 50;
      }
      if (!offset) {
        offset = 0;
      } 
      const result = await Patient.findAndCountAll({
        attributes: ["id", "name", "email", "age", "gender", "address"],
        order: [["id", "ASC"]],
        limit,
        offset,
      });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async getPatientById(req, res, next){
    try {
      const { id } = req.params;
      if (isNaN(+id)) {
        throw { name: "WrongFormatId" };
      }
      const patient = await Patient.findByPk(id, {
        attributes: ["id", "name", "email", "age", "gender", "address"],
        order: [["id", "ASC"]],
        include: {
          model: BookingSchedule,
          attributes: ["booking_date", "status"],
          include: [{
            model: DoctorSchedule,
            attributes: ["price", "start_hour", 'end_hour', 'booking_limit'],
            include: [{
              model: Day, 
              attributes: ["name"],
            },{
              model: Employee,
              attributes: ["name"],
            }]
          },
          // {
          //   model: MedicationHistory,
          //   attributes: ["description", "total_price", "is_paid"],
          //   include: [{
          //     model: PatientMedicine,
          //     attributes: ["quantity", "price"],
          //     include: {
          //       model: Medicine,
          //     }
          //   }]
          // }
        ]
        }
      })
      if (!patient) {
        throw { name: "IdNotFound" };
      }
      res.status(200).json(patient);
    } catch (err) {
      next(err);
    }
  }

  static async createPatient(req, res, next){
    try {
      const patient = await Patient.create(req.body);
      delete patient.password;
      res.status(201).json(patient);
    } catch (err) {
      next(err);
    }
  }

  static async editPatient(req, res, next) {
    try {
      const { id } = req.params;
      if (isNaN(+id)) {
        throw { name: "WrongFormatId" };
      }
      const patient = await Patient.findByPk(id);
      if (!patient) {
        throw { name: "IdNotFound" };
      }
      await Patient.update(req.body,
        {
          where: { id }
        }
      );
      res.status(200).json({ message: 'Data has been updated'});
    } catch (err) {
      next(err);
    }
  }

  static async deletePatient(req, res, next){
    try {
      const { id } = req.params;
      if (isNaN(+id)) {
        throw { name: "WrongFormatId" };
      }
      const patient = await Patient.findByPk(id);
      if (!patient) {
        throw { name: "IdNotFound" };
      }
      await Patient.destroy({
        where: {id}
      })
      res.status(200).json({ message: 'Data has been deleted'});
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PatientController;
