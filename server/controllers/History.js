const { MedicationHistory } = require("../models")

class HistoryController {
    static async showAll(req, res, next) {
        try {
            const histories = await MedicationHistory.findAll()
            res.status(200).json(histories)
        } catch (err) {
            next(err)
        }
    }

    static async editStatus(req, res, next) {
        const { id } = req.params
        const { is_paid } = req.body
        try {
            const found = await MedicationHistory.findByPk(id)
            if (!found) {
                throw ({name: "IdNotFound"})
            }
            await MedicationHistory.update(
                {is_paid},
                {
                    where: {id},
                    returning: true
            })
            res.status(200).json({message: "Data has been updated"})
        } catch (err) {
            next(err)
        }
    }

    static async findHistoryByBookingId(req, res, next) {
        const { BookingScheduleId } = req.params
        try {
            const history = await MedicationHistory.findOne({
                where: {BookingScheduleId}
            })
            if (!history) {
                throw({name: "IdNotFound"})
            }
            res.status(200).json(history)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = HistoryController