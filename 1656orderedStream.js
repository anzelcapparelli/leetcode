/*
 * @param {number} n
 */
 var OrderedStream = function(n) {
    this.stream=[];
    this.counter=0;
};

/* 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    var answr=[];
    this.stream[idKey-1]=value;
    for(this.counter; this.stream[this.counter];this.counter++){
        answr.push(this.stream[this.counter]);
    }
    return answr;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */



//  Input
//  ["OrderedStream", "insert", "insert", "insert", "insert", "insert"]
//  [[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]
//  Output
//  [null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]
 
//  obj.insert(idKey,value)


 var obj = new OrderedStream(5);

 var input=[[3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]

 input.forEach(entry => {
    console.log(obj.insert(entry[0],entry[1]));
 })