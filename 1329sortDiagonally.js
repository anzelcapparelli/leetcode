/*
 * @param {number[][]} mat
 * @return {number[][]}
 */

// traverse rows first? Then cols where left off!!
var diagonalSort = function (mat) {
    var pointer = 0;
    var temp = [];

    for (i = 0, ml = mat.length; i < ml; ++i) {
        while (mat[i + pointer] && mat[i + pointer][pointer]) {
            temp.push(mat[i + pointer][pointer]);
            pointer++;
        }
        temp.sort((a, b) => a - b);
        pointer = 0;
        while (mat[i + pointer] && mat[i + pointer][pointer]) {
            mat[i + pointer][pointer] = temp[pointer];
            pointer++;
        }
        pointer = 0;
        temp = [];
    }
    for (j = 1, mw = mat[0].length; j < mw; ++j) {
        while (mat[pointer] && mat[pointer][j + pointer]) {
            temp.push(mat[pointer][j + pointer]);
            pointer++;


        }
        temp.sort((a, b) => a - b);
        pointer = 0;

        while (mat[pointer] && mat[pointer][j + pointer]) {
            mat[pointer][j + pointer] = temp[pointer];

            pointer++;
        }
        pointer = 0;
        temp = []
    }

    return mat
};



var mat = [[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]]
// Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]


console.log(diagonalSort(mat));