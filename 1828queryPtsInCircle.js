/*
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */

// need to run for each query & point test dist calc against r...
// 

var countPoints = function (points, queries) {

    var ql = queries.length;
    var answr = new Array(ql).fill(0);

    for (i = 0; i < ql; ++i) {
        for (j = 0, pl = points.length; j < pl; ++j) {
            if (Math.sqrt((queries[i][0] - points[j][0]) ** 2 + (queries[i][1] - points[j][1]) ** 2) <= queries[i][2]) {
                answr[i]++;
            }
        }
    }

    return answr;
};




var points = [[1, 3], [3, 3], [5, 3], [2, 2]]
var queries = [[2, 3, 1], [4, 3, 1], [1, 1, 2]]
// Output: [3,2,2]

console.log(countPoints(points, queries))