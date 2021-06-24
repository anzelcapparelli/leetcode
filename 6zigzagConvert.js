/*
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    var down = true;
    // answr = new Array(numRows).fill([])
    // ^^^ doesn't seem to work: a change to any array is reflected in all 
    var answr = [];
    var strAnswr = "";
    for (i = 0; i < numRows; ++i) {
        answr.push([])
    }

    for (i = 0, count = -1, l = s.length; i < l; ++i) {
        if (numRows === 1) {
            answr[i]=(s)
            console.log(answr)
        } else if (down) {
            if (count < numRows - 1) {
                count++;
                answr[count].push(s[i]);
            } else {
                down = false;
                i--;
            }
            console.log(answr)
        } else {
            if (count > 0) {
                count--;
                answr[count].push(s[i]);
            } else {
                down = true;
                i--;
            }
            console.log(answr)
        }
    }

    for (i = 0; i < numRows; ++i) {
        strAnswr += answr[i].join("")
    }

    return strAnswr
};



// var s = "PAYPALISHIRING";
// var numRows = 4;
// Output: "PINALSIGYAHRPI"

var s = "ABC";
var numRows = 1;
// Output: "AB"

console.log(convert(s, numRows))