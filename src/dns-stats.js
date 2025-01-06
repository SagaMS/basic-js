const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  let domainsObf ={

  }
  for (let index = 0; index < domains.length; index++) {
      const element = domains[index];
      let domainsRow = element.split('.').reverse()
      for (let i = 0; i < domainsRow.length; i++) {
          if(i<domainsRow.length){
              domainsRow[i] = '.'+domainsRow[i]
          }
      }
      
      let keys = makeKeys(domainsRow);

      for (let i = 0; i< keys.length; i++) {

          const k = keys[i];
        
          if (k in domainsObf){
              domainsObf[k] +=1
          }else{

              domainsObf[`${k}`] =1
          }
      }  
   }

   function makeKeys(arr){
      let newA = []
      let index = 1;
      while(index<=arr.length){
         newA.push(arr.slice(0, index).join(''));
         index+=1;
       
      }
      return newA;
   }

   return domainsObf
   
}

module.exports = {
  getDNSStats
};
