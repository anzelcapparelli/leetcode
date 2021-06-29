/*
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
    var temp;
    var count = nums.length
    for (i = nums.length - 1; i > 0; --i) {
        if (nums[i] === nums[i - 1]) {
            for (j = i; j < count; ++j) {
                if(nums[j+1]){
                    temp = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
                }
            }
            count--
        }
    }
    return count && nums
};


// var nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

var nums = [1,1,2]
// Output: 2, nums = [1,2,_]

var nums=[-3,-1,-1,0,0,0,0,0,2]
output=[-3,-1,0,2]

console.log(removeDuplicates(nums))