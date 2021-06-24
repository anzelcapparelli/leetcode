/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(parseInt(String(x).split("").reverse().join(""))===x){
        return true
    } else {
        return false
    }
};


var x = 121
// Output: true


console.log(isPalindrome(x));