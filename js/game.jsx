var React = require('react');
var Store = require('./store');
var Sudoku = require('./sudoku');
var Boards = require('./boards');
import {Link} from 'react-router';

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  shouldComponentUpdate(newProps, newState) {
    var oldCell = this.props.cell;
    var newCell = newProps.cell;
    return (
      oldCell.value !== newCell.value ||
      oldCell.editable !== newCell.editable ||
      oldCell.hasConflict !== newCell.hasConflict
    );
  }

  render() {
    var cell = this.props.cell;

    var classes = [];
    classes.push('i'+cell.i);
    classes.push('j'+cell.j);
    classes.push(cell.editable ? 'editable' : 'not-editable');
    classes.push(cell.hasConflict ? 'has-conflict' : 'no-conflict');

    return (
      <td className={classes.join(' ')}>
        <input
          type="tel"
          value={cell.value}
          onClick={this.onClick}
          onChange={this.onChange} />
      </td>
    );
  }

  onClick(event) {
    event.preventDefault();
    if (this.props.cell.editable) {
      event.target.select();
    } else {
      event.target.blur();
    }
  }

  onChange(event) {
    event.preventDefault();
    var cell = this.props.cell;
    if (!cell.editable) {
      return;
    }
    var newValue = event.target.value;
    if (newValue !== '' && !/^[1-9]$/.test(newValue)) {
      event.target.value = cell.value;
      return;
    }
    Store.dispatch({
      type: 'CHANGE_VALUE',
      i: cell.i,
      j: cell.j,
      value: newValue === '' ? null : parseInt(newValue)
    });
  }
}

function GithubCorner() {
  return (
    <a target="_blank" href="https://github.com/andreynering/sudoku" className="github-corner">
      <svg width="80" height="80" viewBox="0 0 250 250" style={{fill:'#151513', color:'#fff', position: 'absolute', top: 0, border: 0, right: 0}}>
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{transformOrigin: '130px 106px'}} className="octo-arm"></path>
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
      </svg>
    </a>
  );
}

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = Store.getState();
  }

  componentDidMount() {
    var self = this;
    self.unsubscribe = Store.subscribe(function() {
      self.setState(Store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    var time = this.state.game.time;
    function f(num) {
      if (num < 10) {
        return '0'+num;
      } else {
        return ''+num;
      }
    }
    return (
      <div className="controls">
        <p><Link to="/">Back</Link></p>
        {Sudoku.isComplete(this.state.game.cells)
          ? <p className="congratulations">Congratulations!</p>
          : <p>{f(time.getHours())+':'+f(time.getMinutes())+':'+f(time.getSeconds())}</p>}
      </div>
    )
  }
}

class DifficultyDialog extends React.Component {
  shouldComponentUpdate(newProps, newState) {
    return false;
  }

  constructor(props) {
    super(props);
    this.state = Store.getState();

    this.difficultyClick = this.difficultyClick.bind(this);
  }

  componentDidMount() {
    var self = this;
    self.unsubscribe =  Store.subscribe(function() {
      self.setState(Store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="dialog">
        <Link to="/" className="dialog-close">&#x2715;</Link>
        <p>Please, choose the difficulty:</p>
        <button data-difficulty="easy" onClick={this.difficultyClick}>Easy</button>
        <button data-difficulty="medium" onClick={this.difficultyClick}>Medium</button>
        <button data-difficulty="hard" onClick={this.difficultyClick}>Hard</button>
      </div>
    );
  }

  difficultyClick(event) {
    event.preventDefault();
    var difficulty = event.target.getAttribute('data-difficulty');
    Store.dispatch({type: 'NEW_GAME', difficulty});
    location.hash = 'play';
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = Store.getState();
  }

  componentDidMount() {
    var self = this;
    this.unsubscribe = Store.subscribe(function() {
      self.setState(Store.getState());
    });

    this.addSecond = setInterval(function() {
      Store.dispatch({type: 'ADD_SECOND'});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addSecond);
    this.unsubscribe();
  }

  render() {
    if (typeof localStorage.currentGame === 'undefined') {
      location.hash = '/';
      return <div></div>;
    }

    return (
      <div>
        <table className="sudoku-table">
          <tbody>
            {this.state.game.cells.map(function(line, i) {
              return (
                <tr key={i}>
                  {line.map(function(cell) {
                    return <Cell cell={cell} key={cell.j} />;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <Controls />
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Sudoku</h1>
        <p><Link to="new-game">Start a new game</Link></p>
        {this.hasExistingGame()
          ? <p>or <Link to="play">resume the existing one</Link></p>
          : null}
        <p>The code of this game is on&nbsp;
        <a href="https://github.com/andreynering/sudoku" target="_blank">GitHub</a></p>
      </div>
    );
  }

  hasExistingGame() {
    return (typeof localStorage.currentGame !== 'undefined');
  }
}

function App(props) {
  return (
    <div>
      {props.children}
      <GithubCorner />
    </div>
  );
}

module.exports = {App, DifficultyDialog, Game, Index};
