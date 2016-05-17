/**
 * @description Add Binary No.67
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 精度会有问题
    // return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
    var c = '';
    var tmp = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length) {
        var numa = parseInt(a.pop(), 10) || 0;
        var numb = parseInt(b.pop(), 10) || 0;
        var sum = numa + numb + tmp;
        c = sum % 2 + c;
        if (sum > 1) {
            tmp = 1;
        } else {
            tmp = 0;
        }
    }
    return tmp ? '1' + c : c;
};
console.log(addBinary('1', '11'));
