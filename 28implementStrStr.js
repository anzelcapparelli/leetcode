/*
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};


var haystack = "hello"
var needle = "ll"
// Output: 2

console.log(strStr(haystack,needle))