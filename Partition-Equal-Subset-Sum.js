/**
 * @desc Partition Equal Subset Sum
 * https://leetcode.com/problems/partition-equal-subset-sum/
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b) / 2;
    const max = nums.length / 2;

    const getArr = (nums, index) => {
        return nums.slice(0, index).concat(nums.slice(index + 1));
    };

    const notInt = num => {
        return parseInt(num, 10) !== num;
    };

    const cacheObj = {};

    const cache = (lNum, leftNum, max) => {
        // 存储cache
        const key = `${leftNum.join(',')}-${lNum}-${max}`;
        if (cacheObj[key] === undefined) {
            cacheObj[key] = packageVal(lNum, leftNum, max);
        }
        return cacheObj[key];
    };

    const packageVal = (sum, nums, max) => {
        if (notInt(sum)) return false;
        if (max > 1) {
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] < sum) {
                    const leftNum = getArr(nums, i);
                    const lNum = sum - nums[i];
                    const res = cache(lNum, leftNum, max--);
                    if (res) return true;
                }
            }

            return false;
        } else {
            return nums.indexOf(sum) !== -1;
        }
    };

    return packageVal(sum, nums, max);
};

const a = canPartition([1, 5, 11, 5]);
// const a = canPartition([1, 2, 3, 5]);
console.log(a);
