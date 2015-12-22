var React = require('react');
var ReactDOM = require('react-dom');
var Store = require('./store');
var Sudoku = require('./sudoku');
var Game = require('./game');

var _game = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
];

var game = []
for (var i = 0; i < 9; i++) {
  var line = [];
  for (var j = 0; j < 9; j++) {
    line.push(new Sudoku.Cell(i, j, _game[i][j]));
  }
  game.push(line);
}

Store.dispatch({type: 'NEW_GAME', game: new Sudoku.Game(game)});

var appDiv = document.getElementById('app');
ReactDOM.render(<Game />, appDiv);
