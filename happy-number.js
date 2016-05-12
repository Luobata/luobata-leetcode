/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var list = {};
    var flag = false;
    var getSquers = function (str) {
        var arr = str.toString().split('');
        var number = 0;
        arr.forEach(function (item, index) {
            number += Math.pow(parseInt(item, 10), 2);
        });
        return number;
    };
    var crycle = function (str) {
        var num = getSquers(str);
        if (num === 1) {
            flag = true;
        } else if (list[num] !== 1) {
            list[num] = 1;
            crycle(num);
        } else {
            flag = false;
        }

    };
    crycle(n);

    return flag;
};

console.log(isHappy(16));
