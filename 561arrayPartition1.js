

numberArray.sort(compareNumbers);


/*
* @param {number[]} nums
* @return {number}
*/
var arrayPairSum = function (nums) {

    var sum = 0;

    function compareNumbers(a, b) {
        return a - b;
    }

    nums.sort(compareNumbers);

    for (i = 0; i < nums.length; i += 2) {
        sum += Math.min(nums[i], nums[i + 1])
    }
    return sum;
};