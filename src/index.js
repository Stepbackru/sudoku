function possibleSolve(matrix, y, x, n) {
  const xSquare = Math.floor(x / 3) * 3;
  const ySquare = Math.floor(y / 3) * 3;

  for (let i = 0; i < 9; i++) {
    if (matrix[y][i] === n || matrix[i][x] === n) {
      return false;
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix[ySquare + i][xSquare + j] === n) {
        return false;
      }
    }
  }

  return true;
}

module.exports = function solveSudoku(matrix) {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (matrix[y][x] === 0) {
        for (let n = 1; n <= 9; n++) {
          if (possibleSolve(matrix, y, x, n)) {
            matrix[y][x] = n;
            
            if (solveSudoku(matrix)) return matrix;
          }
        }
        
        matrix[y][x] = 0;
        return false;
      }
    }
  }
  
  return matrix.map(el => el);
}
