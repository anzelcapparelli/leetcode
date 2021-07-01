/*
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
var answr=""

    for (j = 0, m = strs[0].length; j < m; ++j) {
        for (i = 0, l = strs.length; i < l; ++i) {
            if (strs[0][j] !== strs[i][j]) {
                return answr
            }
        }
        answr+=strs[0][j]
    }
    return answr;
};


// var strs = ["flower", "flow", "flight"]
// Output: "fl"


var strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

console.log(longestCommonPrefix(strs))