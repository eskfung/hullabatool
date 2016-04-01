var expect = require('chai').expect;
var app = require(__dirname + '/../app');
var http = require('http');

var port = 3333;
var sessionCookie = null;
var server;

function defaultGetOptions(path) {
  var options = {
    "host": "localhost",
    "port": port,
    "path": path,
    "method": "GET",
    "headers": {
      "Cookie": sessionCookie
    }
  };
  return options;
}

describe('App', function () {
  before(function (done) {
    server = app.listen(port, function (err, result) {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
  });

  after(function (done) {
    server.close();
    done();
  });

  it('should exist', function (done) {
    expect(app).to.exist;
    done();
  });

  describe('Routes', function () {
    describe('GET /', function () {
      it('responds with status 200', function(done) {
        var headers = defaultGetOptions('/');
        http.get(headers, function (res) {
          expect(res.statusCode).to.equal(200);
          done();
        });
      });
    });

    describe('GET /mastermind', function () {
      it('responds with status 200', function(done) {
        var headers = defaultGetOptions('/mastermind');
        http.get(headers, function (res) {
          expect(res.statusCode).to.equal(200);
          done();
        });
      });
    });
  });
});
