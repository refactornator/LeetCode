/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = [];
    let tempWord = '';

    for (let i = 0; i <= s.length; i++) {
        if ((s[i] === ' ' || i === s.length) && tempWord.length > 0) {
            words.push(tempWord);
            tempWord = '';
        } else if (s[i] !== ' ') {
            tempWord = tempWord + s[i];
        }
    }

    const reversed = words.reverse();
    return reversed.join(' ');
};