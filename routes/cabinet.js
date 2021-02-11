const express = require('express');
const controller = require('../controllers/cabinet');
const router = express.Router();
const {requireAuth} = require('../middleware/authMiddleware')

router.get('/', requireAuth, controller.cabinet_get);
router.post('/', controller.cabinet_post);
router.delete('/:id', controller.cabinet_delete);

module.exports = router;
