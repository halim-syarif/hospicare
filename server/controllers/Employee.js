const { Employee, Poli } = require("../models");
const { checkPassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class EmployeeController {
  static async loginEmployee(req, res, next) {
    try {
      let { email, password } = req.body;
      if (!email || !password) {
        throw { name: "emailPasswordRequired" };
      }
      let result = await Employee.findOne({
        where: { email },
      });

      if (!result || !checkPassword(password, result.password)) {
        throw { name: "UserNotFound" };
      }

      const payload = {
        id: result.id,
        name: result.name,
        email: result.email,
        role: result.role,
      };

      let access_token = signToken(payload);

      res.status(200).json({
        access_token,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getAllEmployeee(req, res, next) {
    try {
      let { limit, offset } = req.query;
      if (!limit) {
        limit = 50;
      }
      if (!offset) {
        offset = 0;
      }
      const result = await Employee.findAndCountAll({
        attributes: ["id", "name", "email", "age", "gender", "address", "role"],
        include: {
          model: Poli,
          attributes: ["id", "name"],
        },
        order: [["id", "ASC"]],
        limit,
        offset,
      });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async getAllDoctors(req, res, next) {
    try {
      let { limit, offset } = req.query;
      if (!limit) {
        limit = 50;
      }
      if (!offset) {
        offset = 0;
      }
      const result = await Employee.findAndCountAll({
        where: {
          role: "Doctor",
        },
        attributes: ["id", "name", "email", "age", "gender", "address", "role"],
        include: {
          model: Poli,
          attributes: ["id", "name"],
        },
        order: [["id", "ASC"]],
        limit,
        offset,
      });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async getDoctorsByPoli(req, res, next) {
    try {
      const { poli_id } = req.params;
      let { limit, offset } = req.query;
      if (!limit) {
        limit = 50;
      }
      if (!offset) {
        offset = 0;
      }
      const result = await Employee.findAndCountAll({
        where: {
          role: "Doctor",
          poliId: poli_id,
        },
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

  static async getEmployeeById(req, res, next) {
    try {
      const { id } = req.params;
      if (isNaN(+id)) {
        throw { name: "WrongFormatId" };
      }
      const employee = await Employee.findByPk(id, {
        attributes: ["id", "name", "email", "age", "gender", "address"],
        include: {
          model: Poli,
          attributes: ["id", "name"],
        },
      });
      if (!employee) {
        throw { name: "IdNotFound" };
      }
      res.status(200).json(employee);
    } catch (err) {
      next(err);
    }
  }

  static async createEmployee(req, res, next) {
    try {
      const employee = await Employee.create(req.body);
      delete employee.password;
      res.status(201).json(employee);
    } catch (err) {
      next(err);
    }
  }

  static async editEmployee(req, res, next) {
    try {
      const { id } = req.params;
      if (isNaN(+id)) {
        throw { name: "WrongFormatId" };
      }
      const employee = await Employee.findByPk(id);
      if (!employee) {
        throw { name: "IdNotFound" };
      }
      await Employee.update(req.body,
        {
          where: { id }
        }
      );
      res.status(200).json({ message: 'Data has been updated'});
    } catch (err) {
      next(err);
    }
  }

  static async deleteEmployee(req, res, next){
    try {
      const { id } = req.params;
      if (isNaN(+id)) {
        throw { name: "WrongFormatId" };
      }
      const employee = await Employee.findByPk(id);
      if (!employee) {
        throw { name: "IdNotFound" };
      }
      await Employee.destroy({
        where: {id}
      })
      res.status(200).json({ message: 'Data has been deleted'});
    } catch (err) {
      next(err);
    }
  }
}

module.exports = EmployeeController;
