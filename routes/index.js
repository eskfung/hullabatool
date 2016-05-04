var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mastermind', function(req, res, next) {
  res.render('mastermind', { title: 'Mastermind' });
});

module.exports = router;
