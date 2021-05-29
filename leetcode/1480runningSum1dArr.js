// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]


// Constraints:

// 1 <= nums.length <= 1000

// -10^6 <= nums[i] <= 10^6


/*
 * @param {number[]} nums
 * @return {number[]}
 */

 var runningSum = function(nums) {
    var currSum=0
    for(i=0; i<nums.length; i++){
        currSum+=nums[i];
        nums[i]=currSum;
    }
    return nums
};

// Runtime: 112 ms, faster than 5.21% of JavaScript online submissions for Running Sum of 1d Array.
// Why so slow? Will probs look at solution (might be constraints of JS as a coding language)

// Memory Usage: 38.6 MB, less than 97.24% of JavaScript online submissions for Running Sum of 1d Array.
// gut reation is to make an additional array: I did it with an array & 1 var => super efficient space 