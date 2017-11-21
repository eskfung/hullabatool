/* globals __dirname */
const express = require("express");
const path = require("path");
const appServer = express();

// view engine setup
appServer.use(express.static(path.join(__dirname, "dist")));

appServer.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// error handlers

// development error handler
// will print stacktrace
if (appServer.get("env") === "development") {
  appServer.use(function(err, req, res, _next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
appServer.use(function(err, req, res, _next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});

module.exports = appServer;
