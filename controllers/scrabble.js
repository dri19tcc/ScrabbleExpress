var ScrabbleScorer = require("../lib/scrabble_scorer.js");
var scrabble = new ScrabbleScorer;

var ScrabbleController = {
  getChart: function (request, response) {
    var locals = {}

    locals.title = "Here is the Scoring Chart!"
    locals.scores = {
      A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
      D: 2, G: 2,
      B: 3, C: 3, M: 3, P: 3,
      F: 4, H: 4, V: 4, W: 4, Y: 4,
      K: 5,
      J: 8, X: 8,
      Q: 10, Z: 10
    }
    locals.params = "stuff here"
    
    response.render('scrabble/chart', locals);
  },

  getScore: function (request, response) {
    var locals = {}

    locals.title = "Score Words Here!"

    response.render('scrabble/score', locals);
  },

  postScore: function (request, response, word) {
    var locals = {}

    locals.title = "Score Words Here!"
    locals.word = word + ": "
    locals.score = scrabble.score(word);

    response.render('scrabble/score', locals);
  }
}

module.exports = ScrabbleController
