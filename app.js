const express = require('express');
const mongoose = require('mongoose');
const mainRoutes = require('./routes/main');
const authRoutes = require('./routes/auth');
const cabinetRouter = require('./routes/cabinet')
const cabinetUserRouter = require('./routes/cabinetUser')
const teaRouter = require('./routes/tea')
const cookieParser = require('cookie-parser')
const hbs = require('hbs');
const app = express();
const { checkUser } = require('./middleware/authMiddleware');

mongoose
  .connect('mongodb://localhost:27017/tea', {
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
app.use('/',mainRoutes);
app.use('/', authRoutes);
app.use('/cabinet',cabinetRouter)
app.use('/cabinetUser',cabinetUserRouter)
app.use('/',teaRouter)
module.exports = app;
