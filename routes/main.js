const express = require('express')
const controller = require('../controllers/main')
const router = express.Router()
// const { checkUser } = require('../middleware/authMiddleware');
router.get('/', controller.get)

module.exports = router