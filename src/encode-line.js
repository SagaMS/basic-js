const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  while(str!==''){
     const temp = makeSub(str, str[0])
     result +=temp[0];
     str = temp[1]
 
  }
  function makeSub(str, letter){
     const firstLetter = str[0];
     if(firstLetter !== letter){
         return [letter, str]
     }else{
     let count = 0      
     for (let index = 0; index < str.length; index++) {
         if(firstLetter === str[index]){
             count ++;  
         }else{
              return [`${count}${firstLetter}`, str.slice(index)]
             // return `${count}${firstLetter}`
         }
          
      }
      return [`${count}${firstLetter}`, '']
     }
     }
 
     let eins = "1";
     let regex = new RegExp(eins, 'g');
     return result.replace(regex, '');
     
 }
module.exports = {
  encodeLine
};
