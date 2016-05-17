/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description Validate Binary Search Tree No.98
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    // 先序有限遍历数 如果是B树 一定是递增的
    if (!root) return true;
    var tmp;
    var flag = true;
    var walk = function (root) {
        if (root && root.left) walk(root.left);
        if (root && (tmp === undefined || root.val > tmp)) tmp = root.val
        else flag = false;
        if (root && root.right) walk(root.right);
    };
    walk(root);

    return flag;
};

var obj2 = {
    left: {
        left: null,
        right: null,
        val: 1
    },
    right: null,
    val: 1
};
var obj = {};
var obj = {
    right: {
        left: null,
        right: null,
        val: -1
    },
    left: null,
    val: 0
};
console.log(isValidBST(obj));
