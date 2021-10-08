const jwt = require('jsonwebtoken')
const secret = process.env.SECRETKEY

function sign(payload){
    return jwt.sign(payload, secret)
}

function verify(token){
    return jwt.verify(token, secret)
}

module.exports = {
    sign,
    verify
}