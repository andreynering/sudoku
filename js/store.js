var Redux = require('redux');

var Store = Redux.createStore(function(state, action) {
  if (!state)
    state = {};
  switch (action.type) {
    case 'NEW_GAME':
      state.game = action.game;
      break;
    case 'CHANGE_VALUE':
      state.game.cells[action.i][action.j].value = action.value;
      break;
  }
  if (state.game) {
    state.game.checkConflicts();
  }
  return state;
});

module.exports = Store;
