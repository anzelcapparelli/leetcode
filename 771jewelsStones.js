// could use filter

// all characters of jewels are unique
// filter for each, count length, done?
// redundancy: checks already filtered stuff?

// in filter, splice matches?
// time to splice might remove benefits...

// O(nxm) complexity if filter for each without splicing...


/*
* @param {string} jewels
* @param {string} stones
* @return {number}
*/

var jewels = "aA";
var stones = "aAAbbbb";

// var numJewelsInStones = function (jewels, stones) {
//     var matchcount = 0;
//     jewels.forEach(jewel => {
//         matchcount += (stones.filter(stone => stone === jewel)).length;
//     });
//     return matchcount;
// };


var numJewelsInStones = function (jewels, stones) {
    var matchcount = 0;
    for (jewel of jewels) {
        for (stone of stones) {
            if (stone === jewel) matchcount++;
        }
    }
    return matchcount;
};


console.log(numJewelsInStones(jewels, stones))


// Runtime: 92 ms, faster than 23.78% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 40.6 MB, less than 22.36% of JavaScript online submissions for Jewels and Stones.

// I did a terrible job on this one...
    // need to get this more efficient

