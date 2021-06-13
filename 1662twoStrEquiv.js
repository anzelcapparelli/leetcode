/*
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    if (word1.join('')===word2.join('')) return true;
    else return false;
};


var word1 = ["ab", "c"]
var word2 = ["a", "bc"]



console.log(arrayStringsAreEqual(word1, word2));