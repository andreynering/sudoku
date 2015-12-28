var React = require('react');
var ReactDOM = require('react-dom');
var Store = require('./store');
var Sudoku = require('./sudoku');
var Game = require('./game');
var Boards = require('./boards');

if (localStorage.currentGame) {
  Store.dispatch({type: 'RESUME_GAME'});
} else {
  Store.dispatch({type: 'SHOW_DIFFICULTY_DIALOG'});
}

setInterval(function() {
  Store.dispatch({type: 'ADD_SECOND'});
}, 1000);

ReactDOM.render(<Game />, document.getElementById('app'));
