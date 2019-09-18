const jwt = require('jsonwebtoken')
const generateJwt = (data) => {
  return jwt.sign(data,process.env.JWT_KEY)
}

module.exports = {
  generateJwt
}