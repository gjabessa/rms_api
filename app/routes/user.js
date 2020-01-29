var express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')
var authorizationMw = require('../middlewares/authorization')

router.post('/login',userController.login)
router.post('/register',userController.register)
router.post('/password_reset',userController.password_reset)
router.post('/check_registered',userController.check_registered)
router.get('/get_users',userController.getUsers)
router.post('/get_user',authorizationMw.auth,userController.getUser)

module.exports = router