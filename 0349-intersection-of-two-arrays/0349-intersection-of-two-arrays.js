/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let ans=[];
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums2[j]===nums1[i]){
                if (!ans.includes(nums1[i])) {
                    ans.push(nums1[i]);
                }
            }
        }
    }
    return ans
};