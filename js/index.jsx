var React = require('react');
var ReactDOM = require('react-dom');
var Store = require('./store');
var Game = require('./game');
var ReactRouter = require('react-router');

if (localStorage.currentGame) {
  Store.dispatch({type: 'RESUME_GAME'});
}

ReactDOM.render((
  <ReactRouter.Router history={ReactRouter.hashHistory}>
    <ReactRouter.Route path="/" component={Game.App}>
      <ReactRouter.IndexRoute component={Game.Index} />
      <ReactRouter.Route path="play" component={Game.Game} />
      <ReactRouter.Route path="new-game" component={Game.DifficultyDialog} />
    </ReactRouter.Route>
  </ReactRouter.Router>
), document.getElementById('app'));
