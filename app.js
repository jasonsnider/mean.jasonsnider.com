var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var apiArticlesRouter = require('./routes/api/articles');
var apiAuthRouter = require('./routes/api/auth');
var apiUsersRouter = require('./routes/api/users');


var articlesRouter = require('./routes/articles');
var authRouter = require('./routes/auth');
var cmsRouter = require('./routes/cms');
var gamesRouter = require('./routes/games');
var postRouter = require('./routes/post');
var toolsRouter = require('./routes/tools');
var indexRouter = require('./routes/index');

var app = express();

var config = require('../config');

//Connect to MongoDB
mongoose.connect(config.mongodb, { useNewUrlParser: true });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Set up CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
});


app.use('/api/auth', apiAuthRouter);
app.use('/api/users', apiUsersRouter);
app.use('/api/articles', apiArticlesRouter);


app.use('/articles', articlesRouter);
app.use('/auth', authRouter);
app.use('/cms', cmsRouter);
app.use('/games', gamesRouter);
app.use('/post', postRouter);
app.use('/tools', toolsRouter);
app.use('/', indexRouter);

// Auth Error 
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
      //res.status(401).send(err);
      res.status(401);
      res.json({success: false, error: err});
  }
  else {
      next(err);
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
