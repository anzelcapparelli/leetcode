// // Recursive
// var postorder = function(root) {
//     let res = [];
//     function dfsTraversal(root) {
//         if (!root) return;
//         for (let child of root.children) {
//             dfsTraversal(child);
//         }
//         res.push(root.val);
//     }
//     dfsTraversal(root);
//     return res;
//     // Time Complexity: O(N)
//     // Space Complexity: O(H)
// };



// // Iterative
// var postorder = function(root) {
//     if (!root) return [];
//     let stack = [root], res = [];
//     while (stack.length > 0) {
//         let node = stack[stack.length-1];
//         if (node.children.length > 0) {
//             for (let i = node.children.length - 1; i >= 0; i--) {
//                 if (node.children[i]) stack.push(node.children[i]);
//             }
//             node.children = [];
//         } else {
//             res.push(stack.pop().val);    
//         }
//     }
//     return res;
//     // Time Complexity: O(N)
//     // Space Complexity: O(H)
// }


//Time O(n)
//Space O(n)
var postorder = function (root) {
    const stack = root ? [root] : [];
    const out = [];
    while (stack.length) { //O(n)
      root = stack.pop();
      if(root) {
        stack.push(...root.children);
        out.push(root.val);
      }
    }
    return out.reverse(); // + O(n)
  };


var root = [1,null,3,2,4,null,5,6]

console.log(postorder(root));