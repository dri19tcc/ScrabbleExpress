var express = require('express');
var router = express.Router();
var Controller = require('../controllers/scrabble')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scrabble Scorer', blurb: ", for all your Scrabble scoring needs" });
});

router.get('/scrabble/chart', Controller.getChart);
router.get('/scrabble/score', Controller.getScore);
// router.post('/scrabble/score', Controller.postScore);

router.post('/scrabble/score',function(request,response){
var query1 = request.body.word;
Controller.postScore(request, response, query1);
});

router.get('/scrabble/score/:word', function(request, response) {
  var word = request.params.word;
  Controller.postScore(request, response, word);
});

module.exports = router;
