const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, option) {
  if(str ===null){
      str ='null';
  }
  if(option.repeatTimes === undefined){
      option.repeatTimes = 1;
  }
  if(option.separator ===undefined){
      option.separator = '+'
  }
  let resultS =''
  for (let index = 0; index < Number(option.repeatTimes); index++) {
      resultS +=`${str}${makeaddition(option.addition, option.additionSeparator, option.additionRepeatTimes)}${index+1 < option.repeatTimes ? option.separator : ""}`
  }

  function makeaddition(addition ='', additionSeparator='|', additionRepeatTimes=1){
      if(addition ===null){
          addition = 'null'
      }

      let additionString = '';
      if(addition!==''){
      for (let index = 0; index < Number(additionRepeatTimes); index++) {
          additionString += `${addition}${index+1 < additionRepeatTimes ? additionSeparator : ""}`
  }}       
  return additionString;
  }
  return resultS;
}
module.exports = {
  repeater
};
