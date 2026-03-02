// Importar módulos
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');
require('dotenv').config();
require('./config/database'); 


var app = express();


var cors = require('cors');
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const habitsRouter = require('./routes/habits');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/habits', habitsRouter);

// Catch 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;