const userSchema = require('../models/userSchema')

validationMiddleware = (req, res, next) => {
    const { error } = userSchema.validate(req.body)
    
    if(error){
      return res.status(422).json(error.message)
    }
    
    next()
  }

  module.exports = validationMiddleware