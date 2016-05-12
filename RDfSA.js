/**
 * @description Remove Duplicates from Sorted Array  26
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length
    for (var i = 0; i < nums.length;) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            console.log(i)
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    console.log(nums);
    return nums.length;
};
//console.log(removeDuplicates([1,1,2,2,3,3,4,5]));
//console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([1,1,1]));
