/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let count=0;
    let max=-Infinity;
    let low=Infinity;
    for(let i=0;i<nums.length;i++){
     if(nums[i]>max){
        max=nums[i]
     } 
    }
    for(let j=0;j<nums.length;j++){
        if(nums[j]<low){
            low=nums[j];
        }
    }
         while (low !== 0) {
        let temp = low;
        low = max % low;
        max = temp;
    }
    return max;
};