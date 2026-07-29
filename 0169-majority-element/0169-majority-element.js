/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map = new Map();

  for(let ch of nums){
    map.set(ch , (map.get(ch)||0)+1)


  }
  for(let [key ,val] of map){
  if(val>nums.length/2){
    return key;
  }
  }
  return map;
};
// let map = new Map()
//     for(let num of nums){
//         map.set(num,(map.get(nums||0)+1));
//         return map;