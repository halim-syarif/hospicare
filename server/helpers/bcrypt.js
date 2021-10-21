const bcrypt = require('bcryptjs')


function hashPassword(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))

}

function checkPassword(password, hashPassword){
    return bcrypt.compareSync(password, hashPassword)
}

hashPassword('mantap')
module.exports = {
    hashPassword,
    checkPassword
}