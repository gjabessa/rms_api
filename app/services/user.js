var User = require('../models/user')
var jwt = require('jsonwebtoken')
var string = require('../../constants/strings')

module.exports.findUserById = function(id){
    var user = new Promise((resolve,reject)=>{
        User.findOne({_id:id}, function(err,user){
            if(err) reject(err)
            resolve(user)
        })
    }).then(function(data){
        return {success:true,message:data}
    },function(err){
        return {success:false,message:string.errors.FIND_USER_ERROR,error:err}
    })

    return user
    
}

module.exports.authenticate = function(id,password){
    var user = new Promise((resolve,reject)=>{
        User.findOne({_id:id,password:password},function(err,user){
            if (err) reject(err)
            resolve(user);
        })
    }).then(function(data){
        if(!!data){
            var token = jwt.sign({ _id:data._id }, 'shhhhh');
            return {success:true,message:{user:data,token:token}}
        } else {
            return {success:false,message:'Incorrect credentials'};
        }
    },function(err){
        return {success:false,message:string.errors.AUTHENTICATION_ERROR,error:err}
    })

    return user
}

module.exports.findAllUsers = function(){
    var users = new Promise((resolve,reject)=>{
        User.find({},function(err,users){
            resolve(users)
        })
    }).then(function(data){
        return {success:true,message:data}
    },function(err){
        return {success:false,message:string.errors.FIND_USERS_ERROR,error:err}
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
                reject(err)
            } else {
                resolve('Successfully registered')
            }
        })
    }).then(function(data){
        return {success:true,message:data}
    },function(err){
        return {success:false,message:string.errors.REGISTRATION_ERROR,error:err}
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