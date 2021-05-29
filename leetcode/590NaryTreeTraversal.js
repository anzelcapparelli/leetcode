/*
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/*
 * @param {Node|null} root
 * @return {number[]}
 */

// NON-BINARY!
// thinking I org by level? NOT just lowest level first: 

// if a null directly under, then that is next in list

// need to count how many lists are closed
// get list #: substr?

// get an obj

// open node: # spots on prev lvl

var postorder = function (root) {

    var tree = {
        order: []
    };

    // var firstIndex = root[0];
    // var currentIndex = root[0];
    // var i = 2;

    // root.forEach(element => {
    //     if (element) {
    //         tree[element] = [];
    //         // children.push(element);
    //     }
    // });

    // tree.order = Object.keys(tree);
    // var children = root.filter(branch => branch);

    // children.shift();

    // while(root.indexOf(null,prevMatch+1)>0){
    //     do stuff
    // }


    // identifies the children
    // var index1 = root.indexOf(null);
    // var index2 = root.indexOf(null, index1 + 1);
    // 1
    // vvv this is cheese: need to determine which is next (children may be relevant, as order...) -> USE SHIFT!

    // CurrNode: shift, then push to order object; do indexOf @ right time? or eval number on shift, then put val places if shift or not

    var nodeInd = 0;

    // initializing

    var curr = root.shift();
    tree[curr] = [];

    while (curr) {
        tree.order.push(curr);
        curr = root.shift();
    }

    while (root.length > 0) {

        curr = root.shift();
        if (curr) {
            tree.order.push(curr);
            tree[tree.order[nodeInd]].push(curr);
        } else {
            nodeInd++;
            tree[tree.order[nodeInd]] = [];
        }

    }

    // ======================================================= tree setup

    var checkNode = tree.order[0]
    var prevNode;
    var answer = [];



    // while (tree.order[1]) {
    //     if (tree[checkNode][0]) {
    //          ^^^ check that empty array is not considered true!

    //         prevNode = checkNode;
    //         checkNode = tree[checkNode][0];
    //          ^^^ this doesn't dive deeper maybe?... it might...

    //     } else {
    //         answer.push(tree[prevNode]);
    //         tree.prevNode=[];
    //         checkNode=tree.order[0];
    //     }
    // }    

    console.log(tree[checkNode][0])
    if (tree[checkNode][0]===2){
        
    }


    return tree;
};




// tree[firstIndex] = root.slice(index1 + 1, index2);
// at end of previous property, look into property of values in property

// get array after, then indexOf after to get next  NO; just set search from prev match+1
// don't need children array!

// =================================================================================================================================


// root = [1, null, 3, 2, 4, null, 5, 6]

root = [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]
// Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]



console.log(postorder(root));

