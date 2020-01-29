var userService = require('../services/user')

module.exports.login = async function(req,res){
    var id = req.body.id
    var password = req.body.password
    var user = await userService.authenticate(id, password)
    res.json(user)
}

module.exports.getUsers = async function(req,res){
    var users = await userService.findAllUsers()
    res.json(users)
}

module.exports.getUser = async function(req,res){
    var id = req.body.id
    var user = await userService.findUserById(id)
    res.json(user)
}

module.exports.register = async function(req,res){
    var userRegistration = await userService.registerUser(req.body)
    res.json(userRegistration)    
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