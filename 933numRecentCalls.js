var RecentCounter = function() {
    
    this.pingArr=[];

};

// 

/* 
* @param {number} t
* @return {number}
*/


RecentCounter.prototype.ping = function(t) {
    this.pingArr.push(t);
    while(this.pingArr[0]<t-3000){
        this.pingArr.shift();
    }
    return this.pingArr.length
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
