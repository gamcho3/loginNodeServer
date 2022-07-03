var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
const passportConfing = require('./passport/naverStrategy');
const mongoConnect = require('./util/database').mongoConnect;
const session = require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRoutuer = require('./routes/login');
require('dotenv').config();
var app = express();
passportConfing();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));
app.set('port',process.env.PORT || 3000)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//social login
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret:process.env.SECRET
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',loginRoutuer);
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



mongoConnect(()=>{
  // console.log(client);
  const server = app.listen(app.get('port'),()=>{
    console.log(`express server on ${server.address().port}`);
  })
});

module.exports = app;
