/**
 * @description Product of Array Except Self No.218
 * @desc 要求复杂度 O(n) 不适用额外的空间 不使用除法
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // 使用了除法
    var result = function (nums) {
        var all = 1;
        var index = 0;
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                index ++;
            } else {
                all  = all * nums[i];
            }
        }
        return [all, index];
    };
    var getOut = function (nums, all) {
        var output = [];
        for (var i = 0; i < nums.length; i++) {
            if (all[1] > 1) {
                output[i] = 0;
            } else if (all[1] > 0) {
                output[i] = nums[i] === 0 ? all[0] : 0;
            } else {
                output[i] = all[0] / nums[i];
            }
        }
        return output;
    };
    return getOut(nums, result(nums));
};

var productExceptSelf = function(nums) {
    var res = [];
    var right = 1;
    for (var i = 0; i < nums.length; i++) {
        res[i] = 1;
    }
    for (var i = 1; i < res.length; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    for (var i = res.length - 1; i >= 0; i--) {
        res[i] = right * res[i];
        right = right * nums[i];
    }
    return res;
};
console.log(productExceptSelf([0,0]));
console.log(productExceptSelf([1,0]));
console.log(productExceptSelf([1,2,3,4]));
