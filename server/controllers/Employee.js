const { Employee } = require('../models')
const { checkPassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class EmployeeController {
    static async loginEmployee(req, res, next){
      try {
        let { email, password } = req.body
        if(!email || !password){
          throw { name: 'emailPasswordRequired'}
        }
        let result = await Employee.findOne({
          where: { email }
        })
  
        if (!result || !checkPassword(password, result.password)) {
          throw ({ name: 'UserNotFound' })
        }
   
        const payload = {
          id: result.id,
          name: result.name,
          email: result.email,
          role: result.role
        }
  
        let access_token = signToken(payload)
  
        res.status(200).json({
          message: "Login Successfully",
          data: {
            access_token
          },
        });
  
      } catch (err) {
        next(err)
      }
    }
}

module.exports = EmployeeController