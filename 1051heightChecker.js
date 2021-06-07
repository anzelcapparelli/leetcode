/*
 * @param {number[]} heights
 * @return {number}
 */

var heightChecker = function (heights) {
    var dupe = [...heights];
    var count = 0;
    dupe.sort(function (a, b) {
        return a - b;
    });
console.log(dupe)
console.log(heights)

    for (i = 0; i < dupe.length; i++) {
        if (dupe[i] !== heights[i]) {
            count++;
            console.log(count);
        }
    }

    return count;

};

var heights = [1, 1, 4, 2, 1, 3]

console.log(heightChecker(heights))