const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const myNumbers = []
  const stringNum = n.toString();
  for (let index = 0; index < stringNum.length; index++) {
      const letter = stringNum[index];
      let newNumber = stringNum.replace(letter, '');
      myNumbers.push(Number(newNumber));
  }
  return Math.max(...myNumbers);
}

module.exports = {
  deleteDigit
};
