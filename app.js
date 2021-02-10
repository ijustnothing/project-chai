const express = require('express');
const mongoose = require('mongoose');
// const mainRoutes = require('./routes/main');
const authRoutes = require('./routes/auth');
const cookieParser = require('cookie-parser')
const hbs = require('hbs');
const app = express();
const { checkUser } = require('./middleware/authMiddleware');

mongoose
  .connect('mongodb://localhost:27017/jwt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected.'))
  .catch((error) => console.log(error));

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(require('cors')());
hbs.registerPartials('views/partials');


app.get('*', checkUser);
app.get('/',(req, res) => res.render('main'));
app.use('/', authRoutes);

module.exports = app;
