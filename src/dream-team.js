const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if (!Array.isArray(members)){
    return false;
}


  const workArray = [];
  for (let index = 0; index < members.length; index++) {
      let element = members[index];
      if(typeof element === 'string'){
          element = element.trimStart();
          element =  element.trimEnd();
          element =  element.toUpperCase();
          workArray.push(element[0]);
          workArray.sort();
      }
  }
  return workArray.join('');
}

module.exports = {
  createDreamTeam
};
