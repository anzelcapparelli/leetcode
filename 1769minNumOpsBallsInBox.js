/*
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    var ogLoc = [];
    var l = boxes.length;
    var answr = new Array(boxes.length).fill(0);

    for (i = 0; i < l; ++i) {
        if (boxes[i]==1) ogLoc.push(i);
    }

    for (i = 0; i<l; ++i) {
        ogLoc.forEach(el => {
            var temp= Math.abs(el - i)
            answr[i]+=temp;
        })
    }

    return answr;
};


var boxes = "001011"
// Output: [11,8,5,4,3,4]

console.log(minOperations(boxes));