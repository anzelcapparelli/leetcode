/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    var addArr = address.split(".");
    return addArr.join("[.]");
};


/*
 * @param {string} address
 * @return {string}
 */

// dont need to do for every element: just for the number of times theres a .

var address = "1.1.1.1"
// var address = "255.100.50.0"

var defangIPaddr = function (address) {

var numIterations= address.filter(el => el =".")
console.log(numIterations)
    for (i = 0; i < address.length; ++i) {
        var fangsArr = []
        currFan
fangsArr.push(address.indexOf("."))

    }
};

defangIPaddr(address);

// filter may not work on char strings!

// ^^^ b/c IP addresses, probably a limit to how long they are? My solution probably has terrible space complexity without this limit

// Runtime: 76 ms, faster than 72.04% of JavaScript online submissions for Defanging an IP Address.
// Memory Usage: 38.3 MB, less than 79.41% of JavaScript online submissions for Defanging an IP Address.

    // could also probably use a combination of find & splice? Is there a find all? findIndex or indexOf may work better
    // findIndex requires a bool function
    // indexOf tests for values
    // they only work for the first instance: dojnt seem as good

    // second array: track indeces of .
    // filter og arr: "!."
    // splice @ indeces [.]

