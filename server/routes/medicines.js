const routes = require('express').Router()
const MedecineController = require('../controllers/Medicine')
const { authentication, authOnlyAdmin } = require('../middlewares/auth')

// routes.use(authentication)

routes.get('/', MedecineController.getAllMedicines)
routes.get('/:id', MedecineController.getMedincineById)
routes.post('/', MedecineController.createMedecine)
routes.put('/:id', MedecineController.editMedicine)
// routes.delete('/:id', authOnlyAdmin, MedecineController.deleteMedicine)
routes.delete('/:id', authentication, authOnlyAdmin, MedecineController.deleteMedicine)


module.exports = routes