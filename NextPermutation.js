/**
 * @description Next Permutation No.31
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var swap = function (arr, a, b) {
        var tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }
    var reverse = function (index) {
        var i = index + 1;
        var j = nums.length - 1;
        while (j - i > 0) {
            swap(nums, i, j);
            i++;
            j--;
        }
    };
    var find = function (index) {
        for (var i = nums.length - 1; i >= 0; i--) {
            if (nums[i] > nums[index]) {
                swap(nums, i, index);
                reverse(index);
                return;
            }
        }
    };
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[i - 1]) {
            find(i-1);
            return;
        }
    }
    nums.reverse();
};

var nums = [1];
nextPermutation(nums);
console.log(nums);
var nums = [2,2,7,5,4,3,2,2,1];
nextPermutation(nums);
console.log(nums);
var nums = [5,4,7,5,3,2];
nextPermutation(nums);
console.log(nums);
var nums = [1,2,3];
nextPermutation(nums);
console.log(nums);
var nums = [3,2,1];
nextPermutation(nums);
console.log(nums);
var nums = [1,1,5];
nextPermutation(nums);
console.log(nums);
var nums = [1,3,2];
nextPermutation(nums);
console.log(nums);
var nums = [2,3,1];
nextPermutation(nums);
console.log(nums);
