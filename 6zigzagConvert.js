/*
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    if (numRows === 1) {
        return s;
    }

    var down = true;
    var answr = new Array(numRows).fill("")
    var strAnswr = "";


    for (i = 0, count = -1, l = s.length; i < l; ++i) {
        if (down) {
            if (count < numRows - 1) {
                count++;
                answr[count]+=s[i];
            } else {
                down = false;
                i--;
            }
        } else {
            if (count > 0) {
                count--;
                answr[count]+=s[i];
            } else {
                down = true;
                i--;
            }
        }
    }

    for (i = 0; i < numRows; ++i) {
        strAnswr += answr[i]
    }

    return strAnswr
};



var s = "PAYPALISHIRING";
var numRows = 4;
// Output: "PINALSIGYAHRPI"

// var s = "ABC";
// var numRows = 1;
// Output: "AB"

console.log(convert(s, numRows))