/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var arr = [];
    nums.sort(function (a, b) {
        return a - b;
    });
    var twoSum = function (arr, target) {
        // 默认传入的数组是已经排序的
        var i = 0;
        var j = arr.length - 1;
        var arrs = [];
        while (j > i) {
            var sum = arr[i] + arr[j];
            if (sum === target) {
                arrs.push([arr[i], arr[j]]);
                i++;
                j--;
            } else if (sum > target) {
                j--;
            } else {
                i++;
            }
        }
        return arrs;
    };
    var kSum = function (arr, target, dep) {
        if (dep > 2) {
            var arrs = [];
            for (var i = 0; i < arr.length; i++) {
                var tmpA = arr.slice(0);
                tmpA.splice(i, 1);
                kSum(tmpA, target - arr[i], dep - 1).forEach(function (item, index) {
                    item.push(arr[i]);
                    //item.sort(function (a, b) {
                    //    return a - b;
                    //});
                    arrs.push(item);
                });
            }
            return arrs;
        } else {
            return twoSum(arr, target);
        }
    };
    var del = function (arr) {
        var arrs = [];
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            arr[i].sort(function (a, b) {
                return a - b;
            });
            if (!obj[arr[i]]) {
                obj[arr[i]] = 1;
                arrs.push(arr[i]);
            }
        }
        return arrs;
    };
    return del(kSum(nums, target, 4));
};

console.log(fourSum([1, 0, -1, 0, -2, 2],0));
