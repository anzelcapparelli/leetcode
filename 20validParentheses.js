/*
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var sArr = s.split("");
    var answr = true;
    for (i = 0; i < sArr.length; ++i) {
        switch (sArr[i]) {
            case ")":
                if (sArr[i - 1] === "(") {
                    sArr.splice(i - 1, 2)
                    i-=2
                }
                else {
                    return answr = false
                }
                break;

            case "]":
                if (sArr[i - 1] === "[") {
                    sArr.splice(i - 1, 2)
                    i-=2
                    
                }
                else {
                    return answr = false
                }
                break;

            case "}":
                if (sArr[i - 1] === "{") {
                    sArr.splice(i - 1, 2)
                    i-=2

                }
                else {
                    return answr = false
                }
                break;

            default:
                break;
        }
    }
    if (sArr.length>0) return answr=false;
    return answr;
};


// var s = "([)]"
// Output: false


var s = "{[]}"
// Output: true


console.log(isValid(s));