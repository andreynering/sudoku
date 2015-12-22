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

var Sudoku = {
  Game,
  Cell
}

module.exports = Sudoku;
