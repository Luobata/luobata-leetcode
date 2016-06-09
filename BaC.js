/**
 * @description Bulls and Cows No.299
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    secret = secret.split('');
    guess = guess.split('');
    if (secret.length !== guess.length) return;
    var A = 0;
    var B = 0;
    var obj = {};
    for (var i = 0; i < secret.length;) {
        if (secret[i] === guess[i]) {
            A++;
            secret.splice(i, 1);
            guess.splice(i, 1);
        } else {
            obj[secret[i]] ? obj[secret[i]].push(i) : (obj[secret[i]] = [i]);
            i++;
        }
    }
    for (var i = 0; i < guess.length; i++) {
        if (obj[guess[i]] && obj[guess[i]].length) {
            B++;
            obj[guess[i]].splice(-1);
        }
    }
    console.log(obj);
    return A + 'A' + B + 'B';
};

console.log(getHint('1807', '7810'));
console.log(getHint('1123', '0111'));
console.log(getHint('1234', '0111'));
console.log(getHint('1122', '2211'));
console.log(getHint('11', '10'));
