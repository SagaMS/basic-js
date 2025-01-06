const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = matrix[0].reduce((acc, a) => acc + a, 0);
  for (let index = 1; index < matrix.length; index++) {
     for (let i = 0; i < matrix[index].length; i++) {
          if(matrix[index-1][i] !== 0){
              sum += matrix[index][i]

          }
     }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
