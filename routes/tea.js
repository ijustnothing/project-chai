const express = require('express');
const controller = require('../controllers/tea');
const router = express.Router();

router.get('/:id', controller.tea_get);
router.post('/', controller.tea_post);
module.exports = router;
