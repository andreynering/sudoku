var React = require('react');
var ReactDOM = require('react-dom');
var Store = require('./store');
var Sudoku = require('./sudoku');
var Game = require('./game');
var Boards = require('./boards');

if (localStorage.currentGame) {
  Store.dispatch({type: 'NEW_GAME', game: Sudoku.LocalStorageToGame(JSON.parse(localStorage.currentGame))});
} else {
  Store.dispatch({type: 'NEW_GAME', game: Sudoku.BoardToGame(Boards.randomBoard())});
}

var appDiv = document.getElementById('app');
ReactDOM.render(<Game />, appDiv);
