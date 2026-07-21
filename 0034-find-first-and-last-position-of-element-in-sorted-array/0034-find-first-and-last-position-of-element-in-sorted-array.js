/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
   function first(){
        let left=0;
        let right = nums.length - 1;
        let res= -1;

        while(left <= right){
        let mid=Math.floor((left+right)/2)
        if(nums[mid]===target){
            res = mid;
            right = mid-1;
        }
        else if(nums[mid]<target){
           left=mid+1
        }else{
            right=mid-1
        }
    }
    return res;
   }
   function last(){
        let left=0;
        let right = nums.length - 1;
        let res= -1;

        while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(nums[mid]===target){
            res = mid;
            left = mid+1;
        }
        else if(nums[mid]<target){
           left=mid+1
        }else{
            right=mid-1
        }
    }
    return res;
   }
   return([first(), last()]);
};