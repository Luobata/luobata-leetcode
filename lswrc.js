/**
 * @describtion Longest Substring Without Repeating Characters
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var listArr = [];
    var tmpArr = [];
    var arr = s.split('');
    arr.forEach(function (item, index) {
        var ind = tmpArr.indexOf(item);
        if (ind !== -1) {
            if (tmpArr.length > listArr.length) {
                listArr = tmpArr;
            }
            tmpArr = tmpArr.slice(ind + 1);
        }
        tmpArr.push(item);
    });

    return (listArr.length > tmpArr.length) ? listArr.length : tmpArr.length;
};
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('c'));
console.log(lengthOfLongestSubstring('dvdf'));
