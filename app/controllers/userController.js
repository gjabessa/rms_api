var userService = require('../services/user')
var validationService = require('../services/validator')
var strings = require('../../constants/strings')

module.exports.login = async function(req,res){
    var id = req.body.id
    var password = req.body.password
    try{
        var validation = await validationService.check_existence({username:id,password:password});
        if(validation.success){
            var user = await userService.authenticate(id, password)
            res.json(user)
        } else {
            res.json(validation)
        }
    } catch {
        res.json({success:false,message:strings.errors.LOGIN_ERROR})
    }
    
}

module.exports.getUsers = async function(req,res){
    try{
        var users = await userService.findAllUsers()
        res.json(users)
    } catch {
        res.json({success:false,message:strings.errors.FIND_USERS_ERROR})
    }
}

module.exports.getUser = async function(req,res){
    var id = req.body.id
    try{
        var validation = await validationService.check_existence({id:id})
        if(validation.success){
            var user = await userService.findUserById(id)
            res.json(user)
        } else {
            res.json(validation)
        }
    } catch{
        res.json({success:false,message:strings.errors.FIND_USER_ERROR})
    }
    
    
}

module.exports.register = async function(req,res){
    try{
        var validation = await validationService.check_existence({phone:phone,password:password});
        if(validation.success){
            var userRegistration = await userService.registerUser(req.body)
            res.json(userRegistration)
        } else {
            res.json(validation)
        }
    } catch {
        res.json({success:false,message:strings.errors.REGISTRATION_ERROR})
    }
    
}

module.exports.password_reset = function(req,res){
    //password reset
    res.json('password reset')
}

module.exports.check_registered = function(req,res){
    //check if user is registered
    var id = req.body.id
    var isRegistered = userService.checkRegistered(id)
    res.json(isRegistered)
}