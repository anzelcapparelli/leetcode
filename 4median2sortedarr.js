/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var catArr = nums1.concat(nums2).sort((a, b) => { return a - b })
    var l=catArr.length

    if (l%2===0){return (catArr[l/2]+catArr[(l/2)-1])/2}
    else return catArr[(l-1)/2]
};


var nums1 = [1,3]
var nums2 = [2]
// Output: 2.00000


nums1=[1,2]
nums2=[3,4]


// [1,2]
// [3,4]

console.log(findMedianSortedArrays(nums1,nums2))