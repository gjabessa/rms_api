var express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')

router.post('/login',userController.login)
router.post('/register',userController.register)
router.post('/password_reset',userController.password_reset)
router.post('/check_registered',userController.check_registered)

module.exports = router