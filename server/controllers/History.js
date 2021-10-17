const {
  DoctorSchedule,
  MedicationHistory,
  PatientMedicine,
  BookingSchedule,
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

  static async createHistory(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { BookingScheduleId, description, medicine_list } = req.body; //medicine_list = array of {id medicine,price}
      let total_price = 0;
      const result = await BookingSchedule.findByPk(BookingScheduleId, {
        include: {
          model: DoctorSchedule,
        },
      },{ transaction: t });
      total_price += result.DoctorSchedule.price;
      const history = await MedicationHistory.create(
        {
          BookingScheduleId,
          description,
        },
        { transaction: t })
      const patientMedicine = medicine_list.map((el) => {
        total_price += el.price;
        return {
          MedicationId: history.id,
          MedicineId: el.id,
          quantity: 1,
          price: el.price,
        };
      });
      await PatientMedicine.bulkCreate(
        patientMedicine,{ transaction: t })
      await t.commit()
      await MedicationHistory.update(
        { total_price },
        {
          where: { id: history.id }
        },{ transaction: t })
      res.status(201).json({message: 'Medication History Patient updated'})
    } catch (err) {
      await t.rollback()
      next(err);
    }
  }
}

module.exports = HistoryController;
