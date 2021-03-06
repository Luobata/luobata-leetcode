/**
 * @description Substring with Concatenation of All Words No.30
 * @param {string} string 'barfoothefoobarman'
 * @param {string[]} string Arrays '["foo", "bar"]'
 */

var find = function (str, arr) {
    // 复杂度超时 n^2
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

var find = function (str, arr) {
    var strs = str.split('');
    var result = [];
    var obj = {};
    var obj2 = {};
    var length = arr[0].length;
    var s = '';
    var count = 0;
    var left;
    var loop;
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }

    for (i = 0; i < length; i++) {
        left = i;
        count = 0;
        obj2 = {};
        for (let j = i; j + (arr.length - count - 1) * length < str.length; j += length) {
            s = str.substring(j, j + length);
            loop = true;
            if (obj[s]) {
                if (obj2[s]) {
                    obj2[s]++;
                } else {
                    obj2[s] = 1;
                }
                if (obj2[s] > obj[s]) {
                    while (loop && count > 0) {
                        s2 = str.substring(left, left + length);
                        left += length;
                        if (s === s2) {
                            loop = false;
                            obj2[s2]--;
                        } else {
                            obj2[s2]--;
                            count--;
                        }
                    }
                } else {
                    count++;
                    if (count === arr.length) {
                        result.push(left);
                        s = str.substring(left, left + length);
                        obj2[s]--;
                        count--;
                        left += length;
                    }
                }
            } else {
                count = 0;
                left = j + length;
                obj2 = {};
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

var str5 = "abababab";
var arr5 = ["a","b","a"];

console.log(find(str1, arr1));
console.log(find(str2, arr2));
console.log(find(str3, arr3));
console.log(find(str4, arr4));
console.log(find(str5, arr5));
