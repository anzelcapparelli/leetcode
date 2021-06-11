/*
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    var freqCounter = {}
    var uniqueParser;
    var answr = true;
    while (arr.length > 0) {
        var curr = arr.pop();
        if (!(curr in freqCounter)) freqCounter[curr] = 0;
        freqCounter[curr]++;
    }
    uniqueParser = Object.values(freqCounter);
    uniqueParser.sort(function (a, b) { return a - b });
    for (i = 0, l = uniqueParser.length; i < l; ++i) {
        if (uniqueParser[i] === uniqueParser[i + 1]) answr = false;
    }
    return answr;
};




var arr = [1, 2, 2, 1, 1, 3]
// Output: true


console.log(uniqueOccurrences(arr));