const { Poli, Employee, sequelize } = require("../models");

class PoliController {
  static async getAll(req, res, next) {
    try {
      const polis = await Poli.findAll({
        attributes: ["id", "name"],
        include: [
          {
            model: Employee
          },
        ],
        // group: ['Polis']
      });
      res.status(200).json(polis);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PoliController;
