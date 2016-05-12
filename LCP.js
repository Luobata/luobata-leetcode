/**
 * @description Longest Common Prefix 14
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    var str = strs[0];
    if (strs.length < 2 || str === '') return str;

    var index = 0;
    var lcsF = function (str1, str2) {
        var index = 0;
        while (str[index] === str2[index] && index < str1.length && index < str2.length) {
            index++;
        }
        return index;
    };
    for (var i = 1; i < strs.length; i++) {
        str = str.slice(0, lcsF(str, strs[i]));
    }
    return str;
};

var strs = ['123','12','12444'];
var strs2 = ['',''];
var strs3 = ['c','c'];
console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(strs2));
console.log(longestCommonPrefix(strs3));
