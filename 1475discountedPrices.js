/*
 * @param {number[]} prices
 * @return {number[]}
 */

var finalPrices = function (prices) {
    var disPrices = prices;
    for (i = 0, j = 1; i < prices.length; ++i) {
        if (i === j) j++;
        if (i === j) j++;
        while (prices[i] < prices[j]) {
            // if (prices[j++]) j++;
            if (!prices[j]) return;
            j++;
        }
        if (prices[j]) {
            disPrices[i] -= prices[j];
        }
        j = i + 1;
    }
};


var prices = [8, 4, 6, 2, 3]
// Output: [4,2,4,2,3]


console.log(finalPrices(prices))


