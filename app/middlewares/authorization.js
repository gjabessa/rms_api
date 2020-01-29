var userService = require('../services/user')
var strings = require('../../constants/strings')

module.exports.auth = async function(req,res,next){
    try{
        var auth = await userService.authorize(req.body.token)
        if(auth.success){
            next()
        }else {
            res.json(auth)
        }   
    } catch {
        res.json({success:false,message:strings.errors.AUTHORIZATION_ERROR})
    }
    
}

