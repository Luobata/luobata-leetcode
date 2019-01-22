/**
 * @desc container-with-most-water 最大蓄水问题
 * https://leetcode.com/problems/container-with-most-water/
 */

/**
 * @param {number[]} height
 * @return {number}
 */

const getSqu = (height, begin, end) => {
    return Math.min(height[begin], height[end]) * (end - begin);
};
var maxArea = function(height) {
    let begin = 0;
    let end = height.length - 1;
    let max = Math.min(height[begin], height[end]) * (end - begin);

    while (begin < end) {
        const tmp = getSqu(height, begin, end);
        max = tmp > max ? tmp : max;

        if (height[begin] > height[end]) {
            end--;
        } else {
            begin++;
        }
    }

    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 2, 3, 4, 5, 25, 24, 3, 4]));
