var Redux = require('redux');
var Boards = require('./boards');
var Sudoku = require('./sudoku');
var cloneDeep = require('lodash.clonedeep');

var Store = Redux.createStore(function(state, action) {
  if (!state) {
    state = {};
  } else {
    state = cloneDeep(state);
  }
  switch (action.type) {
    case 'RESUME_GAME':
      state.game = JSON.parse(localStorage.currentGame);
      state.game.time = new Date(state.game.time);
      break;
    case 'NEW_GAME':
      state.game = Sudoku.boardToGame(Boards.randomBoard(action.difficulty));
      break;
    case 'CHANGE_VALUE':
      state.game.cells[action.i][action.j].value = action.value;
      break;
    case 'ADD_SECOND':
      if (state.game) {
        state.game.time.setSeconds(state.game.time.getSeconds() + 1);
      }
      break;
  }
  if (state.game) {
    Sudoku.checkConflicts(state.game.cells);
    localStorage.currentGame = JSON.stringify(state.game);
  }
  return state;
});

module.exports = Store;
