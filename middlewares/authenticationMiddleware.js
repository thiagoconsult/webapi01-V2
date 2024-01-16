const keyModel = require('../models/keyModel')

module.exports = authenticationMiddleware = (req, res, next) => {
    
    console.log(req.headers)

    const key = req.headers['authorization']
    
    if(key){
        const apiKey = keyModel.findKey(key.replace('Apikey ', ''))
        
        if(apiKey && apiKey.enabled) 
            return next()
        else 
            res.sendStatus(401)
    }

    res.sendStatus(401)
    
}

