const jwt = require('jsonwebtoken')
const customError = require('./customError')
const debug = require('debug')('auth-sakaue:auth');

const generateJwt = (data) => {
  return jwt.sign(data,process.env.JWT_KEY)
}


const refreshJwt = (token) => {
  try {
    const data = jwt.verify(token, process.env.JWT_KEY)
    return {
      token: generateJwt({user:data.user}),
      data: data
    }
  } catch (error) {
    debug(error)
    if(error instanceof jwt.TokenExpiredError){
      throw new customError(400,'TokenExpiredError','O Token foi expirado')
    }else if(error instanceof jwt.NotBeforeError){
      throw new customError(400,'NotBeforeError','O Token ainda não é valido')
    }else if(error instanceof jwt.JsonWebTokenError){
      throw new customError(400,'JsonWebTokenError','O Token inválido')
    }else{
      throw new customError(500, 'InternalErrro','Erro interno')
    }
  }
}

const getData = (token) =>{
  try{
    return jwt.verify(token, process.env.JWT_KEY)
  } catch (error) {
    debug(error)
    if(error instanceof jwt.TokenExpiredError){
      throw new customError(400,'TokenExpiredError','O Token foi expirado')
    }else if(error instanceof jwt.NotBeforeError){
      throw new customError(400,'NotBeforeError','O Token ainda não é valido')
    }else if(error instanceof jwt.JsonWebTokenError){
      throw new customError(400,'JsonWebTokenError','O Token inválido')
    }else{
      throw new customError(500, 'InternalErrro','Erro interno')
    }
  }
}

module.exports = {
  generateJwt,
  refreshJwt,
  getData
}