const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)
  ){
   throw new Error("'arr' parameter must be an instance of the Array!")} 

 const cloneArr = arr.slice();
 const resultArr = [];
 for (let index = 0; index < cloneArr.length; index++) {
   let element = cloneArr[index];
   if(element==='--discard-next'){
       if(arr[index+1]===undefined){
           cloneArr.pop();
            return transform(cloneArr);
       }else{
           
           if(arr[index+2] ==='--discard-prev' || arr[index+2] === '--double-prev'){
               cloneArr.splice(index+2, 1);
               return transform(cloneArr);
           }else{
               cloneArr.splice(index, 2);
               return transform(cloneArr);
           }
  
       }
     
   }
   else if(element==='--discard-prev'){
       if(arr[index-1] === undefined){
           cloneArr.shift();
           return transform(cloneArr);
       }else{
           cloneArr.splice(index-1, 2);
           return transform(cloneArr);
       }
       
   }
   else if(element==='--double-next'){
       if(arr[index+1]===undefined){
           cloneArr.pop();
           return transform(cloneArr);
       }else{
           cloneArr[index] = cloneArr[index+1]    
           return transform(cloneArr)
         
       }  
   }
   else if(element==='--double-prev'){
       if(arr[index-1] === undefined){
           cloneArr.shift();
           return transform(cloneArr);
       }else{
           cloneArr[index] = cloneArr[index-1];
           return transform(cloneArr);
       }
     
   }else{
       resultArr.push(element);
   }
 } 
return resultArr;
}



module.exports = {
  transform
};
