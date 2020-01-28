var User = require('../models/user')
module.exports.findUserById = function(id){
    var user = new Promise((resolve,reject)=>{
        User.findOne({_id:id}, function(err,user){
            resolve(user)
        })
    })
    return user
}

module.exports.findAllUsers = function(){
    var users = new Promise((resolve,reject)=>{
        User.find({},function(err,users){
            resolve(users)
        })
    })
    return users
}

module.exports.registerUser = function(body){
    var user = new User(
        {
            name: body.name,
            phone: body.phone,
            password: body.password
        }
    )
    var registration = new Promise((resolve,reject)=>{
        user.save(function(err){
            if(err){
                reject('Error registering')
            } else {
                resolve('Successfully registered')
            }
        })
    })
    return registration    
}

module.exports.checkRegistered = async function(id){
    var user = await this.findUserById(id);
    if(!!user){
        return true
    } else {
        return false
    }
}