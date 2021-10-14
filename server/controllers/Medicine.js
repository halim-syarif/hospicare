const { Medicine } = require('../models')

class MedicineController {
    static async getAllMedicines(req, res, next){
        try {
            let { limit, offset } = req.query;
            if (!limit) {
                limit = 20;
            }
            if (!offset) {
                offset = 0;
            }
            const medicines = await Medicine.findAndCountAll({
                attributes: ["id", "name", "price", "description"],
                order: [["id", "ASC"]],
                limit,
                offset,
            });

            res.status(200).json(medicines);
        } catch (err) {
            next(err);
        }
    }

    static async getMedincineById(req, res, next){
        try {
            const { id } = req.params;
            if (isNaN(+id)) {
              throw { name: "WrongFormatId" };
            }
            const medicines = await Medicine.findByPk(id, {
              attributes: ["id", "name", "price", "description"],
            });
            if (!medicines) {
              throw { name: "IdNotFound" };
            }
            res.status(200).json(medicines);
          } catch (err) {
            next(err);
        }
    }

    static async createMedecine(req, res, next){
        try {
            const medicine = await Medicine.create(req.body);
            res.status(201).json({id: medicine.id, name: medicine.name, price: medicine.price, description: medicine.description});
        } catch (err) {
            next(err);
        }
    }

    static async editMedicine(req, res, next){
        try {
            const { id } = req.params;
            if (isNaN(+id)) {
              throw { name: "WrongFormatId" };
            }
            const medicine = await Medicine.findByPk(id);
            if (!medicine) {
              throw { name: "IdNotFound" };
            }
            await Medicine.update(req.body,
              {
                where: { id }
              }
            );
            res.status(200).json({ message: 'Data has been updated'});
        } catch (err) {
            next(err);
        }
    }

    static async deleteMedicine(req, res, next){
        try {
            const { id } = req.params;
            console.log(id);
            if (isNaN(+id)) {
              throw { name: "WrongFormatId" };
            }
            const medicine = await Medicine.findByPk(id);
            if (!medicine) {
              throw { name: "IdNotFound" };
            }
            await Medicine.destroy({
              where: {id}
            })
            res.status(200).json({ message: 'Data has been deleted'});
        } catch (err) {
            next(err);
        }
    }
}

module.exports = MedicineController