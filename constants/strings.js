// these errors can go to front end, 
// therefore naming should be conveniently assigned for both users & developers to understand

const FIND_USER_ERROR = 'Something went wrong with finding user'
const FIND_USERS_ERROR = 'Something went wrong with finding users'
const REGISTRATION_ERROR = 'Something went wrong with registration'
const AUTHENTICATION_ERROR ='Something went wrong with authentication'

module.exports.errors = {
    FIND_USER_ERROR,
    FIND_USERS_ERROR,
    REGISTRATION_ERROR,
    AUTHENTICATION_ERROR
}