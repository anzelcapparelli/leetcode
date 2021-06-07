/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    var orderArr=[]
    const words = s.split(" ");
    while(words.length>0){
            var curr= words.pop();
        orderArr[curr.slice(-1)-1]=curr.slice(0,-1);
    }
    return orderArr.join(" ");
};


var s = "is2 sentence4 This1 a3"

console.log(sortSentence(s));


// use a sorting algorithm for better efficiency!!!