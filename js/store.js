var Redux = require('redux');
var Boards = require('./boards');
var Sudoku = require('./sudoku');

var Store = Redux.createStore(function(state, action) {
  if (!state) {
    state = {};
  }
  switch (action.type) {
    case 'RESUME_GAME':
      state.game = Sudoku.localStorageToGame(JSON.parse(localStorage.currentGame));
      state.dialogVisible = false;
      break;
    case 'NEW_GAME':
      state.game = Sudoku.boardToGame(Boards.randomBoard(action.difficulty));
      state.dialogVisible = false;
      break;
    case 'CHANGE_VALUE':
      state.game.cells[action.i][action.j].value = action.value;
      break;
    case 'ADD_SECOND':
      if (state.game) {
        state.game.time.setSeconds(state.game.time.getSeconds() + 1);
      }
      break;
    case 'SHOW_DIFFICULTY_DIALOG':
      state.dialogVisible = true;
      break;
    case 'HIDE_DIFFICULTY_DIALOG':
      state.dialogVisible = false;
      break;
  }
  if (state.game) {
    Sudoku.checkConflicts(state.game.cells);
    localStorage.currentGame = JSON.stringify(state.game);
  }
  return state;
});

module.exports = Store;
