/**
 * @description Jump Game 2 No.45
 * @description 贪心问题
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // 贪心算法 但是最坏的情况复杂度为O(n ^ 2) 最后一个case通不过
    var arr = [0];
    var min = function (nums, number) {
        if (number <= 0) return arr[arr.length - 1];
        var maxN = arr[arr.length - 1];
        for (var i = nums.length - number - 1; i < nums.length; i++) {
            if (nums[i] < maxN) maxN = nums[i];
        };
        return maxN;
    };
    for (var i = nums.length - 2; i >= 0; i--) {
        var tmpA = arr.slice(arr.length - nums[i], arr.length);
        var maxNum = nums[i] >= arr.length ? 0 : min(tmpA, nums[i] - nums[i + 1]);
        console.log('arr:' + arr);
        console.log('tmpA:' + tmpA);
        console.log('min:' + min(tmpA));
        console.log('maxNum:' + maxNum);
        console.log('nums[i]:' + nums[i] + '\r\n');
        arr.push(maxNum + 1);
    }
    console.log(arr);

    return arr.pop();
};
var jump = function (nums) {
    var res = 0; // jump次数
    var rch = 0; // 从nums[0] 进行res次jump后到达的位置
    var max = 0; // 从nums[0] 到当前位置最远可达的位置

    var maxNum = function (a, b) {
        return a > b ? a : b;
    };

    for (var i = 0; i < nums.length; i++) {
        if (rch < i) {
            res++;
            rch = max;
        }
        max = maxNum(max, nums[i] + i);
    }
    return res;
};

console.log(jump([2,3,1,1,4]));
