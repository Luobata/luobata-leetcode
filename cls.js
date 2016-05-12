/**
 * 两个字符串的最长公共子串
 * CLS 算法
 * @author luobata
 **/
var console = require('better-console');


var cls = function (strFir, strSecond) {
    var strFir = strFir.split('');
    var strSecond = strSecond.split('');

    if (strFir === '' || strSecond === '') return 0;
    var storage = [];
    strFir.forEach(function(item, index) {
        var secondIndex = 0;
        storage[index] = []
        while (index >= secondIndex && secondIndex < strSecond.length) {
            if (item === strSecond[secondIndex]) {
                var last = (index > 0 && secondIndex > 0) ? storage[index - 1][secondIndex - 1] : 0;
                storage[index][secondIndex] = last + 1;
            } else {
                storage[index][secondIndex] = 0;
            }
            secondIndex ++;
        }
    });
    console.log(storage);

    strSecond.forEach(function(item, index) {
        var secondIndex = 0;
        while (index > secondIndex && secondIndex < strFir.length) {
            if (item === strSecond[secondIndex]) {
                var last = (index > 0 && secondIndex > 0) ? storage[secondIndex - 1][index - 1] : 0;
                storage[secondIndex][index] = last + 1;
            } else {
                console.log('index:' + index);
                console.log('secondIndex' + secondIndex);
                storage[secondIndex][index] = 0;
            }
            secondIndex ++;
        }
    });


    console.log(storage);
    return storage;
};


var strFir = 'abcdef';
var strSecond = 'abcefg';
cls(strFir, strSecond);
