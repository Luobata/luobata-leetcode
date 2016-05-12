/**
 * @descriptiom Largest Rectangle in Histogram 84
 * @description 计算最长全1矩阵 复杂度n^2 超时
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var arr = [];
    var max = 0;
    var width = 1;
    var minArr = [];
    var maxArr = [];
    var findLen = function (index, hei) {
        var min = minArr[index] ? minArr[index] : index;
        var max = maxArr[index] ? maxArr[index] : index;
        var num = hei[index];
        if (min > 0 && num <= hei[min - 1]) {
            min--;
        } else {
            maxArr[index + 1] = index;
        }
        if (max < hei.length && num <= hei[max + 1]) {
            max++;
        } else {
            minArr[index - 1] = index;
        }
        while (min > 0 && num <= hei[min - 1]) min--;
        while (max < hei.length && num <= hei[max + 1]) max++;

        minArr[index] = min;
        maxArr[index] = max;
        return max - min + 1;
    };
    for (var i = 0; i < heights.length; i++) {
        if (width * heights.length * heights[i] < max) break;
        var len = findLen(i, heights);
        var num = len * width * heights[i];
        if (num > max) max = num;
    }

    return max;
};
/**
 * @description 利用栈来构造升序数组
 */
var largestRectangleArea = function(heights) {
    var arr = [];
    var tmp = [];
    var max = 0;
    var pushNew = function (i) {
        if (!arr.length || arr.slice(-1) <= i) {
            if (tmp.length) tmp = [];
            arr.push(i);
        } else {
            var num = arr.pop();
            tmp.splice(0, 0, num);
            var val = num * tmp.length;
            max = val > max ? val : max;
            pushNew(i);
            arr.push(i);
        }
    };
    var calc = function (arr) {
        var max = 0;
        arr.forEach( function (item, index) {
            var val = item * (arr.length - index);
            if (val > max) max = val;
        });

        return max;
    };
    for (var i = 0; i< heights.length; i++) {
        pushNew(heights[i]);
    }
    var cal = calc(arr);
    max = cal > max ? cal : max;
    return max;
};

var heights = [2,1,5,6,2,3];
var heights = [0,1,2,3];
var heights = [1,1,1,1];
var heights = [2,0,1,0,1,0];
console.log(largestRectangleArea(heights));
