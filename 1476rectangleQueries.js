/*
 * @param {number[][]} rectangle
 */
 var SubrectangleQueries = function(rectangle) {
    this.rectangle=rectangle;
};

/*
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    for (i=row1;i<=row2;++i){
        for(j=col1;j<=col2;++j){
            this.rectangle[i][j]=newValue;
        }
    }
};

/* 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function(row, col) {
    return this.rectangle[row][col];
};

/* 
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */

var rectangle= [[1,2,1],[4,3,4],[3,2,1],[1,1,1]]

var commandArr=["getValue","updateSubrectangle","getValue","getValue","updateSubrectangle","getValue","getValue"]
var params=[[0,2],[0,0,3,2,5],[0,2],[3,1],[3,0,3,2,10],[3,1],[0,2]]


var obj = new SubrectangleQueries(rectangle);

// console.log(obj.getValue(0,2));

// var tmp2= params[0];
// console.log(obj[tmp1](...params[0]));

for(i=0;i<commandArr.length;++i){
    var tmp= commandArr[i];
    console.log(obj[tmp](...params[i]));
}
