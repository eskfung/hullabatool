import { expect } from 'chai';
import http from 'http';
import app from '../app';

const port = 3333;
const sessionCookie = null;

let server;

function defaultGetOptions(path) {
  const options = {
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
        this.timeout(5000);
        const headers = defaultGetOptions('/');
        http.get(headers, function (res) {
          expect(res.statusCode).to.equal(200);
          done();
        });
      });
    });

    describe('GET /mastermind', function () {
      it('responds with status 200', function(done) {
        const headers = defaultGetOptions('/mastermind');
        http.get(headers, function (res) {
          expect(res.statusCode).to.equal(200);
          done();
        });
      });
    });
  });
});
