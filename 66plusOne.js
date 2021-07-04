/*
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    var pointer = digits.length - 1
    var carryover = false
    do {
        digits[pointer] = (digits[pointer] + 1) % 10;
        digits[pointer] % 10 === 0 ? carryover = true : carryover = false;
        pointer--;
    } while (carryover)
    if (digits[0] === 0) digits.unshift(1);
    return digits;
};


// var digits = [4,3,2,1]
// Output: [4,3,2,2]

// Input
// var digits = [9]
// Expected
// [1,0]

// Input
var digits= [8,9,9,9]
// Expected
// [9,0,0,0]


console.log(plusOne(digits))