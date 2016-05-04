var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mastermind', function(req, res, next) {
  res.render('mastermind', { title: 'Mastermind' });
});

router.get('/love_letter', function(req, res, next) {
  res.render('love_letter_player', { title: 'Play Love Letter' });
});

router.get('/love_letter_cast', function(req, res, next) {
  res.render('love_letter', { title: 'Love Letter' });
});

module.exports = router;
