/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
   if(num<=1){
    return false;
   }
   let sum =1;
   for(let i=2; i<num-1; i++){
    if(num % i === 0){
        sum+= i;
    }
   }
    if(sum === num){
    return true
    }else{
    return false
    }
};