/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @describtion  Flatten Binary Tree to Linked List
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    var findAllByDepth = function (root) {
        if (!root) return;
        if (!root.left && !root.right) {
            return root;
        }
        if (root.left) {
            var tmp = root.right;
            var right = root.right = (root.left !== null ? findAllByDepth(root.left) : null);
            while (right && right.right) {
                right = right.right;
            }
            right.right = findAllByDepth(tmp);
            root.left = null;
            return root;
        } else {
            root.right = findAllByDepth(root.right);
            return root;
        }
    };
    findAllByDepth(root);
    console.log(root.right.right);
};

var obj = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: null
};
var obj2 = {
    val: 1,
    left: {
        val:2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: null
};
var obj2 = {
    val: 5,
    left: {
        val:1,
        left: null,
        right: {
            val: 4,
            left: {
                val: 2,
                left: null,
                right: {
                    val: 3,
                    left: null,
                    right: null
                }
            },
            right: null
        }
    },
    right: null
};
var obj = {
    val: 1,
    right: {
        val: 2,
        left: null,
        right: null
    },
    left: null
};
//flatten(obj); // [1, null, 2, null, null, null, 3]
flatten(obj2); // [1, null, 2, null, null, null, 3]
