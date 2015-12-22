class Cell {
  constructor(i, j, value) {
    this.value = value;
    this.editable = !value;
    this.hasConflict = false;
    this.i = i;
    this.j = j;
  }
}

class Game {
  constructor(cells) {
    this.cells = cells;
  }
}

function ArrayToGame(array) {
  var game = []
  for (var i = 0; i < 9; i++) {
    var line = [];
    for (var j = 0; j < 9; j++) {
      line.push(new Sudoku.Cell(i, j, array[i][j]));
    }
    game.push(line);
  }
  return new Game(game);
}

var Sudoku = {
  Game,
  Cell,
  ArrayToGame
}

module.exports = Sudoku;
