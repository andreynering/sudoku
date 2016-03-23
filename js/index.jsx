var React = require('react');
import {render} from 'react-dom';
var Store = require('./store');
var Game = require('./game');
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

if (localStorage.currentGame) {
  Store.dispatch({type: 'RESUME_GAME'});
}

render(
  <Router history={hashHistory}>
    <Route path="/" component={Game.App}>
      <IndexRoute component={Game.Index} />
      <Route path="play" component={Game.Game} />
      <Route path="new-game" component={Game.DifficultyDialog} />
    </Route>
  </Router>
, document.getElementById('app'));
