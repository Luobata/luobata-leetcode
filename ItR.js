/**
 * @description Integer to Roman No.12
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var roman = [
        ["","I","II","III","IV","V","VI","VII","VIII","IX"],
        ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
        ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
        ["","M","MM","MMM"]
    ];
    var str = '';
    str += roman[3][parseInt(num / 1000 % 10, 10)];
    str += roman[2][parseInt(num / 100 % 10, 10)];
    str += roman[1][parseInt(num / 10 % 10, 10)];
    str += roman[0][parseInt(num / 1 % 10, 10)];

    return str;
};

console.log(intToRoman(10));
