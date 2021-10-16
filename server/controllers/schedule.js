const { DoctorSchedule, Employee, Poli, Day } = require("../models");

class DoctorScheduleController {
  static async showAll(req, res, next) {
    try {
      const { EmployeeId, DayId } = req.query;
      if (EmployeeId) {
        if (isNaN(+EmployeeId)) throw { name: "WrongFormatId" };

        const foundSchedule = await DoctorSchedule.findOne({
          where: { EmployeeId },
        });
        if (!foundSchedule) {
          throw { name: "IdNotFound" };
        }
        res.status(200).json(foundSchedule);
      } else if (DayId) {
        if (isNaN(+DayId)) throw { name: "WrongFormatId" };

        const foundSchedule = await DoctorSchedule.findOne({
          where: { DayId },
        });
        if (!foundSchedule) {
          throw { name: "IdNotFound" };
        }
        res.status(200).json(foundSchedule);
      } else {
        const schedules = await DoctorSchedule.findAll();
        res.status(200).json(schedules);
      }
    } catch (error) {
      next(error);
    }
  }

  static async getScheduleByPoliDay(req, res, next) {
    try {
      const { poliid, dayid } = req.params;
      const foundSchedule = await DoctorSchedule.findAll({
        attributes: ["price", "booking_limit", "start_hour", "end_hour"],
        include: [
          {
            model: Employee,
            attributes: ["name"],
            include: {
              model: Poli,
              attributes: ["name"],
              where: {
                id: poliid,
              },
            },
          },
          {
            model: Day,
            attributes: ["name"],
            where: {
              id: dayid,
            },
          },
        ],
      });
      if (!foundSchedule) {
        throw { name: "IdNotFound" };
      }
      res.status(200).json(foundSchedule);
    } catch (err) {
      next(err);
    }
  }
  // static async findScheduleByDoctorId(req, res, next) {
  //     try {
  //         const { doctorId } = req.params
  //         if (isNaN(+doctorId)) {
  //             throw ({name: "WrongFormatId"})
  //         }
  //         const foundSchedule = await DoctorSchedule.findOne({
  //             where: {doctorId}
  //         })
  //         if (!foundSchedule) throw ({name: "IdNotFound"})
  //         res.status(200).json(foundSchedule)
  //     } catch (error) {
  //         next(error)
  //     }
  // }

  // static async findScheduleByDayId(req, res, next) {
  //     try {
  //         const { dayId } = req.params
  //         if (isNaN(+dayId)) {
  //             throw({name: "WrongFormatId"})
  //         }
  //         const foundSchedule = await DoctorSchedule.findOne({
  //             where: {dayId}
  //         })
  //         if (!foundSchedule) throw({name: "IdNotFound"})
  //         res.status(200).json(foundSchedule)
  //     } catch (error) {
  //         next(error)
  //     }
  // }

  static async editSchedule(req, res, next) {
    try {
      const { id } = req.params;
      if (isNaN(+id)) {
        throw { name: "WrongFormatId" };
      }
      const foundSchedule = await DoctorSchedule.findByPk(id);
      if (!foundSchedule) throw { name: "IdNotFound" };
      await DoctorSchedule.update(req.body, {
        where: { id },
      });
      res.status(200).json({ message: "Data has been edited" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteSchedule(req, res, next) {
    try {
      const { id } = req.params;
      if (isNaN(+id)) {
        throw { name: "WrongFormatId" };
      }
      const foundSchedule = await DoctorSchedule.findByPk(id);
      if (!foundSchedule) {
        throw { name: "IdNotFound" };
      }
      await DoctorSchedule.destroy({
        where: { id },
      });
      res.status(200).json({ message: "Data has been deleted" });
    } catch (error) {
      next(error);
    }
  }

  static async addSchedule(req, res, next) {
    try {
      const newSchedule = await DoctorSchedule.create(req.body);
      res.status(201).json(newSchedule);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = DoctorScheduleController;