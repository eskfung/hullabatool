/* globals __dirname */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const appServer = express();

// view engine setup
appServer.set('views', path.join(__dirname, 'views'));
appServer.set('view engine', 'pug');

appServer.use(logger('dev'));
appServer.use(bodyParser.json());
appServer.use(bodyParser.urlencoded({ extended: false }));
appServer.use(cookieParser());
appServer.use(express.static(path.join(__dirname, 'dist')));

appServer.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// error handlers

// development error handler
// will print stacktrace
if (appServer.get('env') === 'development') {
  appServer.use(function(err, req, res, _next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
appServer.use(function(err, req, res, _next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = appServer;
