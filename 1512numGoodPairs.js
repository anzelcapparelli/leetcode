/*
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    var numCounter = {};
    totalPairs = 0

    const factorial = (count) => {
        let answer = 1;
        if (count == 0 || count == 1) {
            return answer;
        } else {
            for (var i = count; i >= 1; i--) {
                answer = answer * i;
            }
            return answer;
        }
    }

    for (element of nums) {
        if (!numCounter[element]) {
            numCounter[element] = 0
        }
        numCounter[element]++;
    }


    for (property in numCounter) {
        if (numCounter[property] > 1) {
            totalPairs += (factorial(numCounter[property]) / (factorial(numCounter[property] - 2) * 2));
        }
    }

    return totalPairs;

};



// nCr = n! / ((n – r)! r!)


nums = [1, 2, 3, 1, 1, 3];
// nums = [1, 1, 1, 1];

console.log(numIdenticalPairs(nums));