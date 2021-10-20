const {
  DoctorSchedule,
  MedicationHistory,
  PatientMedicine,
  BookingSchedule,
  Patient,
  Medicine,
  Employee,
  Day,
  Poli,
  sequelize,
} = require("../models");

class HistoryController {
  static async showAll(req, res, next) {
    try {
      const histories = await MedicationHistory.findAll();
      res.status(200).json(histories);
    } catch (err) {
      next(err);
    }
  }

  static async editStatus(req, res, next) {
    const { id } = req.params;
    const { is_paid } = req.body;
    try {
      const found = await MedicationHistory.findByPk(id);
      if (!found) {
        throw { name: "IdNotFound" };
      }
      await MedicationHistory.update(
        { is_paid },
        {
          where: { id },
          returning: true,
        }
      );
      res.status(200).json({ message: "Data has been updated" });
    } catch (err) {
      next(err);
    }
  }

  static async findHistoryByBookingId(req, res, next) {
    const { BookingScheduleId } = req.params;
    try {
      const history = await MedicationHistory.findOne({
        where: { BookingScheduleId },
      });
      if (!history) {
        throw { name: "IdNotFound" };
      }
      res.status(200).json(history);
    } catch (error) {
      next(error);
    }
  }

  static async findHistoryByPatientId(req, res, next) {
    const { patientId } = req.params;
    try {
      // const history = await MedicationHistory.findAll({
      //   attributes: ['id','description', 'total_price'],
      //   include:[{
      //     model: BookingSchedule,
      //     attributes: ['id','antrian', 'keluhan', 'status'],
      //     include: [{
      //       model: Patient,
      //       required: true,
      //       attributes: ['id','name'],
      //       where: {
      //         id: patientId
      //       }
      //     },{
      //       model: MedicationHistory,
      //       required: true,
      //       attributes: ['id',],
      //       where: {
      //         id: patientId
      //       }
      //     }]
      //   },{
      //     model: PatientMedicine,
      //     required: true,
      //     attributes: ['quantity', 'price'],
      //     include: {
      //       model: Medicine,
      //       attributes: ['name']
      //     },
      //   }]
      // });
      const history = await BookingSchedule.findAll({
        where: {
          PatientId: patientId,
        },
        attributes: ["id", "antrian", "keluhan", "status", "booking_date"],
        order: [['booking_date', 'ASC']],
        include: [
          {
            model: MedicationHistory,
            attributes: ["id", "description", "total_price", "is_paid"],
            include: {
              model: PatientMedicine,
              attributes: ["id", "quantity", "price"],
              include: {
                model: Medicine,
                attributes: ["id", "name", "description"],
              },
            },
          },
          {
            model: DoctorSchedule,
            attributes: ["id", "price", "start_hour", "end_hour"],
            include: [
              {
                model: Employee,
                attributes: ["id", "name"],
                include: {
                  model: Poli,
                  attributes: ["id", "name"],
                },
              },
              {
                model: Day,
                attributes: ["id", "name"],
              },
            ],
          },
        ],
      });
      if (!history) {
        throw { name: "IdNotFound" };
      }
      res.status(200).json(history);
    } catch (error) {
      next(error);
    }
  }

  static async createHistory(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { BookingScheduleId, description, medicine_list } = req.body; //medicine_list = array of {id medicine,price}
      let total_price = 0;
      const result = await BookingSchedule.findByPk(
        BookingScheduleId,
        {
          include: {
            model: DoctorSchedule,
          },
        },
        { transaction: t }
      );
      total_price += result.DoctorSchedule.price;
      const history = await MedicationHistory.create(
        {
          BookingScheduleId,
          description,
        },
        { transaction: t }
      );
      const patientMedicine = medicine_list.map((el) => {
        total_price += el.price;
        return {
          MedicationId: history.id,
          MedicineId: el.id,
          quantity: 1,
          price: el.price,
        };
      });
      await PatientMedicine.bulkCreate(patientMedicine, { transaction: t });
      await t.commit();
      await MedicationHistory.update(
        { total_price },
        {
          where: { id: history.id },
        }
      );
      await BookingSchedule.update(
        { status: true },
        {
          where: { id: BookingScheduleId },
        }
      );
      res.status(201).json({ message: "Medication History Patient updated" });
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }

}



module.exports = HistoryController;
