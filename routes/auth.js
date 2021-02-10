const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()

router.get('/login',controller.login_get)
router.post('/login', controller.login)

router.get('/register',controller.register_get)
router.post('/register', controller.register)
router.get('/logout',controller.logout_get)


module.exports = router