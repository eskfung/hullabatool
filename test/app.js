var request = require('request').defaults({ encoding: null });
var expect = require('expect');
var app = require("../app.js");

describe('Routes', function () {
  describe('GET /', function () {
    it('responds with status 200', function(done) {
      request.get('http://localhost:3000/', function (err, res, body) {
        expect(res.statusCode).to.be(200);
      });
      done();
    });
  });
});
