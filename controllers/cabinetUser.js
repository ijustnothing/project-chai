const User = require('../models/User');

module.exports.cabinetUser_get = async function (req, res) {
//   const { id } = req.params;
  const posts = await User.findOne().populate('post');
  //   console.log(teas);
  console.log(posts);
  res.render('cabinetUser', { posts });
};
