/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @descroption  Unique Binary Search Trees II No.95
 * @param {number} n
 * @return {TreeNode[]}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var generateTrees = function(n) {
    var trees = [];
    var makeTree = function (j, n, fn) {
        if (n - j < 0) {
            return [null];
        }
        if (n - j < 1) {
            return [new TreeNode(j)];
        }
        var t = [];
        for (var i = j; i <= n; i++) {
            var tree = generate(i, j, n);
            t.push(tree);
            fn && fn(tree);
        };
        return t;
    };
    /**
     * @param {number|i} 节点数
     * @param {number|j} 区间左边界
     * @param {number|j} 区间有边界
     * @return {TreeNode}
     */
    var generate = function (i, j, n) {
        console.log('i:' + i);
        console.log('j:' + j);
        console.log('n:' + n);
        var right = makeTree(i + 1, n);
        var left = makeTree(j, i - 1);
        var t = [];
        if (right && right.length) {
            for (var p = 0; p < right.length; p++) {
                for (var q = 0; q < left.length; q++) {
                    var tree = new TreeNode(i);
                    tree.right = right[p];
                    tree.left = left[q];
                    t.push(tree);
                };
            };
        } else if (left && left.length) {
            for (var p = 0; p < left.length; p++) {
                for (var q = 0; q < right.length; q++) {
                    var tree = new TreeNode(i);
                    tree.right = right[q];
                    tree.left = left[p];
                    t.push(tree);
                };
            };
        }
        return t;
    };
    makeTree(1, n, function (tree) {
        tree.forEach(function (item, index) {
            trees.push(item);
        });
    });
    return trees;
};

console.log(generateTrees(3));
