/**
 * @description Expression Add Operators No.282
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    var arr = [];
    var getAllArr = function (num, target, str, isMinus) {
        var isMinus = isMinus !== undefined ? isMinus : 1;
        var tmp = '';
        var nums = num.split('');
        console.log('num:' + num);
        console.log('target:' + target);
        console.log('str:' + str);
        console.log('isMinus:' + isMinus + '\r\n');
        if (parseInt(num, 10) *isMinus === target && !(parseInt(num, 10) === 0 && num.length > 1)) {arr.push(num + str);console.log('a');}
        for (var i = 0; i < nums.length && nums.length > 1;) {
            var number = nums.splice(-1);
            if (parseInt(number, 10) === 0 && tmp !== '') {return;console.log('b');}
            tmp = parseInt(number + tmp, 10);
            getAllArr(nums.join(''), target, '*' + tmp + str, tmp * isMinus);
            getAllArr(nums.join(''), target + tmp * isMinus, '-' + tmp + str);
            getAllArr(nums.join(''), target - tmp * isMinus, '+' + tmp + str);
        };
    };
    getAllArr(num, target, '');

    return arr;
};

//console.log(addOperators('123', 6));
//console.log(addOperators('232', 8));
//console.log(addOperators('105', 5));
//console.log(addOperators('00', 0));
console.log(addOperators('000', 0));
