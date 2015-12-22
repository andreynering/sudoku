var React = require('react');
var Store = require('./store');

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {game: Store.getState().game};
  }

  render() {
    return (
      <table className="sudoku-table">
        <tbody>
          {this.state.game.cells.map(function(line, i) {
            return (
              <tr key={i}>
                {line.map(function(cell) {
                  return <td className={'i'+cell.i+' j'+cell.j} key={cell.i+'x'+cell.j}>{cell.value}</td>;
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
