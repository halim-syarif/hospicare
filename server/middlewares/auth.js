const { Employee } = require('../models')
const { verifyToken } = require('../helpers/jwt')

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers
        console.log(req.headers);
        const { id } = verifyToken(access_token)
        const user = await Employee.findByPk(id)

        if(!user){
            throw ({name: 'Token Invalid'})
        }

        req.userLogin = {
            id: user.id,
            email: user.email,
            role: user.role
        }

        next()

    } catch (err) {
        next(err)
    }
}


const authOnlyAdmin = async (req, res, next) => {
    try {
        const {role} = req.userLogin
        if(role !== 'Admin'){
            throw ({name: 'Authorization Failed'})
        } 
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = {
    authentication,
    authOnlyAdmin
}