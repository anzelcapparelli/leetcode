var RecentCounter = function() {
    
    this.pingArr=[];
    this.currLastRelInd=0;

};

// 

/* 
* @param {number} t
* @return {number}
*/


RecentCounter.prototype.ping = function(t) {
    this.pingArr.push(t);
    while(this.pingArr[this.currLastRelInd]<t-3000){
        this.currLastRelInd++;
    }
    return this.pingArr.length-this.currLastRelInd;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
