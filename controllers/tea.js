const Tea = require('../models/Tea');
const Post = require('../models/Post');
const User = require('../models/User');
module.exports.tea_get = async function (req, res) {
  const { id } = req.params;
  const tea = await Tea.findById({ _id: id });
  const comment = await Tea.findById({_id:id}).populate('comments')
//   console.log(comment);
//   console.log(tea);
  // res.status(210).json(tea);
  res.render('tea', { tea,comment});
};
module.exports.tea_post = async function (req, res) {
  const { comment, email, teaName } = req.body; 
   console.log(req.body);

  const tea = await Tea.findOne({ name: teaName });
  const user = await User.findOne({ email: email });
  const post = new Post({ text: comment, author: user._id, tea: tea._id });
  await post.save();
  tea.comments.push(post);
  user.post.push(post)
  tea.save();
  user.save();
  res.json(post);
};
