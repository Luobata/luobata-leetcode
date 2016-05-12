/**
 * @description Find Minimum in Rotated Sorted Array No.153
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (!nums.length) return;
    var min = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < min) min = nums[i];
    }

    return min;
};
var findMin = function(nums) {
    if (!nums.length) return;
    var min = nums[0];
    var left = 0;
    var right = nums.length - 1;
    while (right - left > 1) {
        var middle = parseInt((right - left) / 2, 10) + left;
        var num = nums[middle];
        if (num > nums[left] && num > nums[right]) {
            left = middle;
        } else {
            right = middle;
        }
    }
    min = nums[left] > nums[right] ? nums[right] : nums[left];
    return min;
};

console.log(findMin([4,5,6,7,0,1,2]));
console.log(findMin([1,2,3]));
