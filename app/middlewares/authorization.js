var authorizationService = require('../services/authorization')

module.exports.auth = async function(req,res,next){
    var auth = await authorizationService.authorization(req.body.token)
    if(auth.success){
        next()
    }else {
        res.json(auth)
    }
}

