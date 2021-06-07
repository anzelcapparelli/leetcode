// num is index where need to shift, also number of iterations

// n+i i=n is stop

// lots of splicing

// splice whole array in half

// do from ends! the parts to change remain unaffected

// count from forward to put in


/*
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

var nums = [2,5,1,3,4,7];
var n = 3;

 var shuffle = function(nums, n) {
    var numsCopy= [].concat(nums);
    var tempArr=numsCopy.splice(n);
    for(i=n; i>0; i--){
numsCopy.splice(i,0,tempArr.pop())
    }
  return numsCopy  
};


console.log(shuffle(nums,n));


// Runtime: 100 ms, faster than 8.81% of JavaScript online submissions for Shuffle the Array.
// Memory Usage: 40.1 MB, less than 98.21% of JavaScript online submissions for Shuffle the Array.

// might be comp wonkiness;