
class TicTacToe {
    constructor() {
        this.player = 'x';
        this.matrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
      }
    
      getCurrentPlayerSymbol() {
         return this.player;
      }
    
      nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] !== null) {
          return;
        }
        this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        this.player = this.player === 'x' ? 'o' : 'x';
      }
    
      isFinished() {
         return this.getWinner() !== null || this.isDraw();
      }
    
      getWinner() {
          if (this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][0] == this.matrix[0][2]) {
            return this.matrix[0][0];
          } else if (this.matrix[1][0] == this.matrix[1][1] && this.matrix[1][0] == this.matrix[1][2]) {
            return this.matrix[1][0];
          } else if (this.matrix[2][0] == this.matrix[2][1] && this.matrix[2][0] == this.matrix[2][2]) {
            return this.matrix[2][0];
          } else if (this.matrix[0][0] == this.matrix[1][0] && this.matrix[0][0] == this.matrix[2][0]) {
            return this.matrix[0][0];
          } else if (this.matrix[0][1] == this.matrix[1][1] && this.matrix[0][1] == this.matrix[2][1]) {
            return this.matrix[0][1];
          } else if (this.matrix[0][2] == this.matrix[1][2] && this.matrix[0][2] == this.matrix[2][2]) {
            return this.matrix[0][2];
          } else if (this.matrix[0][0] == this.matrix[1][1] && this.matrix[0][0] == this.matrix[2][2]) {
            return this.matrix[0][0];
          } else if (this.matrix[0][2] == this.matrix[1][1] && this.matrix[0][2] == this.matrix[2][0]) {
            return this.matrix[0][2];
          } else {
              return null;
          }
        }            
    
      noMoreTurns() {
        return this.matrix.filter((row) => row.filter(i => i === null).length !== 0).length === 0;
      }
    
      isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
      }
    
      getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex] ? this.matrix[rowIndex][colIndex] : null
      }
    }
    
module.exports = TicTacToe;
