class CustomError extends Error {
  constructor(code, name, message){
    super()
    this.message = message
    this.name = name
    this.code = code
  }
}
module.exports = CustomError