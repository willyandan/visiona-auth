const bcrypt = require('bcrypt')
const SALT = 8
const hashPassword = (password) => {
  return bcrypt.hashSync(password,SALT)
}

const comparePassword = (plain, hashed) =>{
  return bcrypt.compareSync(plain, hashed)
}

module.exports = {
  hashPassword,
  comparePassword
}