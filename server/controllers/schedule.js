const { Op } = require('sequelize');
const { DoctorSchedule, BookingSchedule, Employee, Poli, Day, Patient } = require("../models");

class DoctorScheduleController {
  static async showAll(req, res, next) {
    try {
        let { limit, offset } = req.query;
        if (!limit) {
            limit = 5;
        }
        if (!offset) {
            offset = 0;
        }
        const schedules = await DoctorSchedule.findAndCountAll({
            attributes: ["id","price", "booking_limit", "start_hour", "end_hour"],
            order: [["id", "ASC"]],
            limit,
            offset,
            include: [
                {
                    model: Day,
                    attributes: ["name"],
                },
                {
                    model: Employee,
                    attributes: ["name"],
                    include: {
                        model: Poli,
                        attributes: ['name']
                    },
                },
                {
                    model: BookingSchedule,
                    attributes: ["id","antrian","keluhan","status"],
                    include: {
                        model: Patient,
                        attributes: ["name"]
                    },
                },
            ],
        });
        res.status(200).json(schedules);
    } catch (error) {
      next(error);
    }
  }

  static async findScheduleByID(req, res, next){
    try {
      const { id } = req.params
      const schedules = await DoctorSchedule.findByPk(id,{
        attributes: ['id', 'booking_limit', 'start_hour', 'end_hour', 'price'],
        include: [
          {
            model: BookingSchedule,
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          }
        ]
      })
      res.status(200).json(schedules)
    } catch (err) {
      next(err)
    }
  }

  static async findScheduleByDoctorName(req, res, next){
    const { doctorName } = req.params 
    try {
      const schedules = await DoctorSchedule.findAll({
        attributes: ['id', 'booking_limit', 'start_hour', 'end_hour', 'price'],
        include: [
          {
              model: Day,
              attributes: ["name"],
          },
          {
              model: Employee,
              attributes: ["name"],
              where: {
                name: {
                  [Op.iLike]: `%${doctorName}%`
                }
              },
              include: {
                  model: Poli,
                  attributes: ['name']
              },
          },
          {
              model: BookingSchedule,
              attributes: ["id","antrian","keluhan","status"],
              include: {
                  model: Patient,
                  attributes: ["name"]
              },
          },
      ],
      })
      res.status(200).json(schedules)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async getScheduleByPoliDay(req, res, next) {
    try {
      const { poliid, dayid } = req.params;
      const foundSchedule = await DoctorSchedule.findAll({
        attributes: ["id","price", "booking_limit", "start_hour", "end_hour"],
        order: [[BookingSchedule, 'antrian', 'asc']],
        include: [
          {
            model: Day,
            required: true,
            attributes: ["name"],
            where: {
              id: dayid,
            },
          },
          {
            model: Employee,
            required: true,
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
            model: BookingSchedule,
            attributes: ["id","antrian","keluhan","status"],
            include: {
              model: Patient,
              attributes: ["name"]
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
