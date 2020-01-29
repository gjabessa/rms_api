var User = require('../models/user')
var strings = require('../../constants/strings')
var jwt = require('jsonwebtoken')
// successful returns should have success and message parameters
// unsuccessful returns should have success,message,error (optional) and error_code (optional) parameters

module.exports.findUserById = function(id){
    var user = new Promise((resolve,reject)=>{
        User.findOne({_id:id}, function(err,user){
            if(err) reject(err)
            resolve(user)
        })
    }).then(function(data){
        return {success:true,message:data}
    },function(err){
        return {success:false,message:strings.errors.FIND_USER_ERROR,error:err}
    })

    return user
    
}

module.exports.authenticate = function(username,password){
    var user = new Promise((resolve,reject)=>{
        User.findOne({username:username,password:password},function(err,user){
            if (err) reject(err)
            resolve(user);
        })
    }).then(function(data){
        console.log(data)
        if(!!data){
            var token = jwt.sign({ _id:data._id }, 'shhhhh')
            return {success:true,message:{user:data,token:token}}
        } else {
            return {success:false,message:'Incorrect credentials'};
        }
    },function(err){
        return {success:false,message:strings.errors.AUTHENTICATION_ERROR,error:err}
    })

    return user
}

module.exports.authorize = function(token){
    var auth = new Promise((resolve,reject)=>{
        jwt.verify(token,'shhhhh',function(err,decoded){
            if(err){
                reject(err)
            } else {
                resolve(decoded)
            }
        })
    }).then(function(data){
        return {success:true,message:data}
    },function(err){
        return {success:false,message:strings.errors.AUTHORIZATION_ERROR,error:err,error_code:strings.error_codes.UNAUTHORIZED}
    })

    return auth
}

module.exports.findAllUsers = function(){
    var users = new Promise((resolve,reject)=>{
        User.find({},function(err,users){
            if(err) reject(err)
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
            username: body.username,
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
    if(user.success){
        if(!!user.message){
            return true
        } else {
            return false
        }
    }
    
}