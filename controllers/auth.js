const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Функция для формирования токена

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, 'welcometoTheFavaly', {
    expiresIn: maxAge,
  });
};

module.exports.login_get = function (req, res) {
  res.render('login');
};
module.exports.register_get = function (req, res) {
  res.render('register');
};
module.exports.login = async function (req, res) {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (user) {
    // проверка пароля
    const passwordResult = bcrypt.compareSync(req.body.password, user.password);
    if (passwordResult) {
      // Генерация токена , пароли совпали
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({ user: user._id });
    } else {
      // pass !=
      res.status(401).json({
        message: 'Пароли не совпали',
      });
    }
  } else {
    // пользователя нет
    res.status(404).json({
      message: 'Пользователь с таким email не найден',
    });
  }
};

module.exports.register = async function (req, res) {
  // email password
  const candidat = await User.findOne({ email: req.body.email });

  if (candidat) {
    // Пользователь сущесьвует , нужно отдать ошибку
    res.status(409).json({
      message: 'Такой email уже занят',
    });
  } else {
    // Нужно создать пользователя
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
    });
    await user.save();
    const token = createToken(user._id);
    // console.log(token);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  }
};

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
};
