const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  post: [{ type: mongoose.Types.ObjectId, ref: 'posts' }],
});

// Статический метод для проверки на наличие КАНДИДАТА
// userSchema.statics.login = async function(email,password) {
//   const candidate = await this.findOne({email});
//   if(candidate) {
//     const
//   }
// }

module.exports = mongoose.model('users', userSchema);
