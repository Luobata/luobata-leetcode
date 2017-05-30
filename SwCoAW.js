/**
 * @description Substring with Concatenation of All Words No.30
 * @param {string} string 'barfoothefoobarman'
 * @param {string[]} string Arrays '["foo", "bar"]'
 */

var find = function (str, arr) {
    var strs = str.split('');
    var next = 0;
    var result = [];
    var has = function (arr, i, length) {
        var s = str.substring(i, i + length);
        return (arr.indexOf(s) !== -1);
    };
    var j = 0;
    var length = arr[0].length;
    var tmp = arr.slice();
    for (let i = 0; i < strs.length;) {
        var s = str.substring(i, i + length);
        var index = tmp.indexOf(s);
        if (index === -1) {
            j++;
            i = j;
            tmp = arr.slice();
        } else {
            tmp.splice(index, 1);
            i = i + length;
            if (!tmp.length) {
                result.push(i - (arr.length) * length);
                j = i - (arr.length) * length + 1;
                i = j;
                tmp = arr.slice();
            }
        }
    }

    return result;
};

var str1 = 'barfoothefoobarman';
var arr1 = ['foo', 'bar'];

var str2 = 'barfoofoobarthefoobarman';
var arr2 = ['foo', 'bar', 'the'];

var str3 = "wordgoodgoodgoodbestword";
var arr3 = ["word","good","best","good"];

var str4 = "aaaaaaaa";
var arr4 = ["aa", "aa", "aa"];

console.log(find(str1, arr1));
console.log(find(str2, arr2));
console.log(find(str3, arr3));
console.log(find(str4, arr4));
