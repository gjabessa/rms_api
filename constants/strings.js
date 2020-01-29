// these errors can go to front end, 
// therefore naming should be conveniently assigned for both users & developers to understand

var FIND_USER_ERROR = 'Something went wrong with finding user'
var FIND_USERS_ERROR = 'Something went wrong with finding users'
var REGISTRATION_ERROR = 'Something went wrong with registration'
var AUTHENTICATION_ERROR ='Something went wrong with authentication'
var AUTHORIZATION_ERROR ='Something went wrong with authorization'
var LOGIN_ERROR = 'Something went wrong with login'

const UNAUTHORIZED = 401

module.exports.errors = {
    FIND_USER_ERROR,
    FIND_USERS_ERROR,
    REGISTRATION_ERROR,
    AUTHENTICATION_ERROR,
    LOGIN_ERROR,
    AUTHORIZATION_ERROR
}

module.exports.error_codes = {
    UNAUTHORIZED
}