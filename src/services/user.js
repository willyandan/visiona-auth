const bcrypt = require('bcrypt')
const SALT = 8
const hashPassword = (password) => {
  return bcrypt.hashSync(password,SALT)
}
module.exports = {
  hashPassword
}