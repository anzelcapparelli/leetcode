/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    // s.split("");
    var orderArr = [];
    for (i = 0; i < s.length; i++) {
        orderArr[indices[i]] = s[i];
    }
    return orderArr.join("");
};


var s = "codeleet";
var indices = [4, 5, 6, 7, 0, 2, 1, 3];

console.log(restoreString(s, indices));

// try to turn into an appropriate shuffle! Might be faster than gen new array...