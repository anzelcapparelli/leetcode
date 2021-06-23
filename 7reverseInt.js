/*
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var rev = parseInt(String(Math.abs(x)).split("").reverse().join(""));
    console.log(rev);
    if (x < 0) rev = rev * -1;

    return Math.abs(rev) > 2 ** 31 - 1 ? 0 : rev;
};


//  x = 123
// Output: 321

x = -123
// Output: -321

console.log(reverse(x))