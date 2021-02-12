const express = require('express');
const controller = require('../controllers/cabinetUser');
const router = express.Router();

router.get('/', controller.cabinetUser_get)
module.exports = router;
