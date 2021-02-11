const express = require('express');
const controller = require('../controllers/cabinet');
const router = express.Router();
const { requireAuth } = require('../middleware/authMiddleware');
const Tea = require('../models/Tea')

router.get('/', requireAuth, controller.cabinet_get);
router.post('/', async function (req, res) {
  const { name, location, text } = req.body;
  console.log(name, location, text);
  const img = 'https://morechamag.ru/6328-thickbox_default/ivan-chaj-kupecheskij-chernyj-rassypnoj.jpg'
  const tea = new Tea({ name, location, text,img });
  await tea.save();
  res.json(tea);
});
router.delete('/:id', controller.cabinet_delete);

module.exports = router;
