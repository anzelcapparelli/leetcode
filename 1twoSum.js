/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// easy solution first, then you can fiddle!!

var twoSum = function (nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (i===j){
                if(i===nums.length-1){
                    return;
                }
                j++;
            }
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }
    }
};


var nums = [2,7,11,15];
var target = 9;
// Output: [0,1]


console.log(twoSum(nums,target));