const { User } = require('../models/index')
const CustomError = require('../services/customError')
const debug = require('debug')('auth-sakaue:auth');
const auth = require('../services/authenticate')
const authenticate = async (req, res)=>{
  try {
    if(!req.body){
      throw new CustomError(400,'InvalidRequest','É preciso enviar o email e senha para realizar o login')
    }
    if(!req.body.email || !req.body.password){
      throw new CustomError(400,'InvalidRequest','É preciso enviar o email e senha para realizar o login')
    }
    const user = await User.findOne({
      email:req.body.email,
      raw:true
    })
    res.status(200).send({
      user,
      token: auth.generateJwt(user)
    }).end()
  } catch (error) {
    debug(error)
    if(error instanceof CustomError){
      res.status(error.code).send({
        code:error.code,
        message:error.message,
        name:error.name
      }).end()
    }else{
      res.status(500).send({
        code:500,
        message:'Erro interno',
        name:'InternalError'
      }).end()
    } 
  }
}

module.exports = {
  authenticate
}