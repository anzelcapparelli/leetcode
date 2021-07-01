/*
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  var words=s.trim().split(" ");
    return words.pop().length;
};

var s = " "
// Output: 0


// Input
var s= "a "
// output: 1

console.log(lengthOfLastWord(s))