/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Negative numbers and numbers ending in 0 (except 0 itself) cannot be palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // x is equal to reversed for even length numbers
    // x is equal to Math.floor(reversed/10) for odd length numbers
    return x === reversed || x === Math.floor(reversed / 10);
};