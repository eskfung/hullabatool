const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, _next) {
  res.render('index', { title: 'Hullabatool' });
});

router.get('/mastermind', function(req, res, _next) {
  res.render('mastermind', { title: 'Mastermind' });
});

module.exports = router;
