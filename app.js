var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const keyRouter = require('./routes/keys')

var app = express();

app.use(logger('dev'));
app.use(express.json());

const authenticationMiddleware = require('./middlewares/authenticationMiddleware')

app.use('/', indexRouter);
app.use('/users', authenticationMiddleware, usersRouter);
app.use('/keys', keyRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  res.status(err.status || 500);
  
});

module.exports = app;
