/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
 let result =[];
 let left = 0;
 let rigth = nums.length-1;
 let index=nums.length-1;

 while(left <= rigth){
    let leftsquare = nums[left]*nums[left];
    let rigthsquare = nums[rigth]*nums[rigth]

    if(leftsquare >rigthsquare){
        result[index]=leftsquare;
        left++;
    }else{
        result[index]=rigthsquare;
        rigth--;
        
    }
    index--;
 }
 return result;
};