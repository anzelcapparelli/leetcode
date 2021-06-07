/*
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    var currIndex = 0;
    var answer = [];
    for (i = 1; i <= n ; i++) {
        answer.push("Push");
        if (i === target[currIndex]) {
            currIndex++;
        } else {
            answer.push("Pop");
        }
        if(!target[currIndex]){
            return answer;
        }
    }
};

// var target = [2, 3, 4];
// var n = 4;

var target = [1,2];
var n = 4;



console.log(buildArray(target, n));