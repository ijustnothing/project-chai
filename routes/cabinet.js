const express = require('express');
const controller = require('../controllers/cabinet');
const router = express.Router();
const { requireAuth } = require('../middleware/authMiddleware');
const Tea = require('../models/Tea')

const multer = require("multer");
const storage = multer.memoryStorage();
const path = require("path");
const fs = require("fs").promises;

const upload = multer({
  storage: storage,
});

router.get("/", requireAuth, controller.cabinet_get);
router.post("/", upload.single("myImage"), async function (req, res) {
  const { name, location, text } = req.body;
  const { file } = req.file;
  console.log(">>>>>>>>>>", file);

  await fs.writeFile(
    path.join(__dirname, "../public/uploads", `${req.file.originalname}`),
    req.file.buffer
  );
    const tea = new Tea({
    name,
    location,
    text,
    img: `/uploads/${req.file.originalname}`,
  });
  await tea.save();
  res.redirect("/cabinet");
});
router.delete("/:id", controller.cabinet_delete);

module.exports = router;