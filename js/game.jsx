var React = require('react');
var Store = require('./store');

class Cell extends React.Component {
  render() {
    var cell = this.props.cell;
    return (
      <td className={'i'+cell.i+' j'+cell.j}>
        <input
          value={cell.value}
          onClick={this.onClick.bind(this)}
          onChange={this.onChange.bind(this)} />
      </td>
    );
  }

  onClick(event) {
    event.preventDefault();
    event.target.select();
  }

  onChange(event) {
    event.preventDefault();
    var cell = this.props.cell;
    var newValue = event.target.value;
    if (newValue !== '' && !/^[1-9]$/.test(newValue)) {
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

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = Store.getState();
  }

  componentDidMount() {
    var self = this;
    Store.subscribe(function() {
      self.setState(Store.getState());
    });
  }

  render() {
    return (
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
    );
  }
}

module.exports = Game;
