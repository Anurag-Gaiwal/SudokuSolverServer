const N = 9;

function solveSudoku(grid) {
  if (solve(grid, 0, 0)) {
    return grid;
  } else {
    return null;
  }
}

function solve(grid, row, col) {
  if (row == N - 1 && col == N) return true;
  if (col == N) {
    row++;
    col = 0;
  }
  if (grid[row][col] != 0) return solve(grid, row, col + 1);

  for (let num = 1; num <= 9; num++) {
    if (isSafe(grid, row, col, num)) {
      grid[row][col] = num;
      if (solve(grid, row, col + 1)) return true;
      grid[row][col] = 0;
    }
  }
  return false;
}

function isSafe(grid, row, col, num) {
  for (let x = 0; x < N; x++) {
    if (grid[row][x] == num) return false;
  }
  for (let x = 0; x < N; x++) {
    if (grid[x][col] == num) return false;
  }
  const startRow = row - row % 3;
  const startCol = col - col % 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i + startRow][j + startCol] == num) return false;
    }
  }
  return true;
}

module.exports = { solveSudoku };
