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
          },{
            model: MedicationHistory,
            attributes: ["description", "total_price", "is_paid"],
            include: [{
              model: PatientMedicine,
              attributes: ["quantity", "price"],
              include: {
                model: Medicine,
                // attributes: ['na']
              }
            }]
          }]
        },
        limit,
        offset,
      });
      // console.log(result.rows[0].BookingSchedules[0].MedicationHistory.PatientMedicines[0].Medicine.name)
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PatientController;
