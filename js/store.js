var Redux = require('redux');

var Store = Redux.createStore(function(state, action) {
  if (!state)
    state = {};
  switch (action.type) {
    case 'NEW_GAME':
      state.game = action.game;
      break;
  }
  return state;
});

module.exports = Store;
