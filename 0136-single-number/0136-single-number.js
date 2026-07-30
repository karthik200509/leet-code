/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let map = new Map();

   for(let num of nums){
    map.set(num , (map.get(num)||0)+1)
   }

   for(let [key,val] of map){
    if(val === 1){
        return key;
    }
   }
   return map;
};