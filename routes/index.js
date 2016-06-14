var express = require('express');
var router = express.Router();
var Controller = require('../controllers/scrabble')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scrabble Scorer', blurb: ", for all your Scrabble scoring needs" });
});

router.get('/scrabble/chart', Controller.getChart);
router.get('/scrabble/score', Controller.getScore);


module.exports = router;
