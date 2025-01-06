const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrWithoutMinusOne = []
  for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if(element !== -1){
          arrWithoutMinusOne.push(element)
      } 
  }
  const arrSortedwithoutMiOne = arrWithoutMinusOne.sort(function(a, b){return b-a})
  
  const resultArr  =[]
  for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if(element === -1){
          resultArr.push(element)
      }else{
          resultArr.push(arrSortedwithoutMiOne.pop());
      }    
  }
  return resultArr;
}


module.exports = {
  sortByHeight
};
