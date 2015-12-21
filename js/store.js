var Redux = require('redux');

var Store = Redux.createStore(function(state, action) {
  if (!state)
    state = {};
  state.message = 'Hello, World!';
  return state;
});

module.exports = Store;
