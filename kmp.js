/**
 * kmp 算法
 * 字符串匹配
 * @author luobata
 **/

var console = require('better-console');

/**
 * @param {strFir|string} 元匹配字符串 较长
 * @param {strSec|string} 匹配用字符串 较短
 *
 * @return {flag|Array} 匹配用数组 没匹配到或者输入不正确返回空数组
 * **/
var kmp = function (strFir, strSec) {
    if (strSec === '' || strFir === '') return [];
    var strFir = strFir.split('');
    var strSec = strSec.split('');
    var nextInit = function (strSec) {
        var next = [];
        next[0] = 0;
        for (var i = 1, k = 0; i < strSec.length; i++) {
            while (k > 0 && strSec[i] !== strSec[k]) {
                k = next[k-1];
            }
            if (strSec[i] === strSec[k]) {
                k++;
            }
            next[i] = k;
        }

        console.log(next);
        return next;
    }
    var next = nextInit(strSec);
    var flag = [];
    for (var i = 0; i < strFir.length;) {
        console.log(i);
        var index = 0;
        while (strFir[i + index] === strSec[index]) {
            index++;
            if (index === strSec.length) flag.push(i);
        }
        if (index > 0) {
            i += index - next[index - 1];
        } else {
            i++;
        }
    }
    return flag;
}

var strFir = 'abcabceabcef';
var strSec = 'abce';
var result = kmp(strFir, strSec);
console.log(result);
