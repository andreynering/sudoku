var Redux = require('redux');

var Store = Redux.createStore(function(state, action) {
  if (!state) {
    state = {};
  }
  switch (action.type) {
    case 'NEW_GAME':
      state.game = action.game;
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
    state.game.checkConflicts();
    localStorage.currentGame = JSON.stringify(state.game);
  }
  return state;
});

module.exports = Store;
