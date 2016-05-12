/**
 ** @param {number[]} nums
 ** @param {number} target
 ** @return {number[]}
 **/
var twoSum = function(nums, target) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) obj[nums[i]] = [];
        obj[nums[i]].push(i);
    }
    console.log(obj);
    var index = [];
    for (var i = 0; i < nums.length; i++) {
        var left = target - nums[i];
        var other = obj[left];
        console.log(left);
        if (other && other[0] !== i) {
            index.push(i);
            index.push(other[0]);
            break;
        } else if (left === nums[i] && other.length > 1) {
            index = other;
            break;
        }
    }
    return index;
};
var nums = [3,2,4];
var nums2 = [0, 3, 4, 0];
var nums3 = [-1, -2, -3, -4, -5];
console.log(twoSum(nums, 6));
console.log(twoSum(nums2, 0));
console.log(twoSum(nums2, 7));
console.log(twoSum(nums3, -8));
