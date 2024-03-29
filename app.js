/* Instantiations */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bicyclesRouteApi = require('./routes/api/bicycles');
const favicon = require('express-favicon');
/* Instantiations */

/* Routes */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
/* Routes */

var app = express();

/* Configurations: view engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
/* Configurations */

/* Middleware */
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/bicycles', bicyclesRouteApi);
/* Middleware */

/* Error handlers */
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
/* Error handlers */

/* Server bootup or server export */
module.exports = app;
/* Server bootup or server export */
