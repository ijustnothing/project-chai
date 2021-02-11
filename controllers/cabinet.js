const Tea = require('../models/Tea');
// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: function(req,file,cb) {
//         cd(null,'./uploads')
//     },
//     filename: function(req,file,cb) {
//         cb(null,new Date().toISOString() + file.originalname)
//     }
// })

// const upload = multer

module.exports.cabinet_get = async function (req, res) {
  const teas = await Tea.find();
  console.log(teas);
  res.render('cabinet', { teas });
};
module.exports.cabinet_delete = async function (req, res) {
  const { id } = req.params;
  await Tea.findByIdAndDelete({ _id: id });
  res.status(208).json('ok');
};
