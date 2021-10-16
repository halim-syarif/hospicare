const { Poli } = require('../models')


class PoliController {
    static async getAll(req, res, next){
        try {
            const polis = await Poli.findAll({
                attributes: ['id', 'name']
            })
            res.status(200).json(polis)
        } catch (err) {
            next(err)
        }
    }
}


module.exports = PoliController