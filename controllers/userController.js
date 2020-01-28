
module.exports.login = function(req,res){
    //login 
    res.json('login')
}

module.exports.register = function(req,res){
    //register
    res.json('register')
}

module.exports.password_reset = function(req,res){
    //password reset
    res.json('password reset')
}

module.exports.check_registered = function(req,res){
    //check if user is registered
    res.json('check reg')
}