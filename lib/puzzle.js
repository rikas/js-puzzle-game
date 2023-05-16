// td.cellIndex -> returns the col (0, 1, 2... etc)
// td.parentElement.rowIndex -> returns the row (0, 1, 2,...etc)

// 1. Select all cells from the table
const cells = document.querySelectorAll('#game-table td');

// 2. get the empty cell
let emptyCell = document.querySelector('#game-table td.empty');

// checks if the cell is in the same column as the empty cell
// returns true or false
const sameCol = (cell) => {
  const col = cell.cellIndex;
  const row = cell.parentElement.rowIndex;

  const emptyCol = emptyCell.cellIndex;
  const emptyRow = emptyCell.parentElement.rowIndex;

  return col === emptyCol && (row === emptyRow + 1 || row === emptyRow - 1); // true or false
};

// checks if the cell is in the same row as the empty cell
// returns true or false
const sameRow = (cell) => {
  const col = cell.cellIndex;
  const row = cell.parentElement.rowIndex;

  const emptyCol = emptyCell.cellIndex;
  const emptyRow = emptyCell.parentElement.rowIndex;

  return row === emptyRow && (col === emptyCol + 1 || col === emptyCol - 1); // true or false
};

// checks if the cell can move to the empty space.
// returns true or false
const canMove = (cell) => {
  return sameCol(cell) || sameRow(cell);
};

const swapCells = (cell) => {
  // 1 add "empty" class to the cell
  cell.classList.add('empty');

  // 2 switch the text (.innerText) between the two cells
  emptyCell.innerText = cell.innerText;
  cell.innerText = '';

  // 3 remove "empty" class from the empty cell
  emptyCell.classList.remove('empty');

  // 4 !!!! VERY IMPORTANT!!!! UPDATE THE emptyCell variable
  emptyCell = cell;
};

// 3. iterate over the cells and add 'click' listener
cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    // 4. check if we can swap the cell with the empty cell
    // 5. if we can swap add "empty" to the cell that swapped
    if (canMove(cell)) {
      // 5.1 swap the cell with the empty cell
      swapCells(cell);
    }
  });
});
