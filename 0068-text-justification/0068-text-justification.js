/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let result = [];
  let current = [];
  let numLetters = 0;

  for (let word of words) {
    if (numLetters + word.length + current.length > maxWidth) {
      for (let i = 0; i < maxWidth - numLetters; i++) {
        current[i % (current.length - 1 || 1)] += ' ';
      }
      result.push(current.join(''));
      current = [];
      numLetters = 0;
    }
    current.push(word);
    numLetters += word.length;
  }
  result.push(current.join(' ').padEnd(maxWidth, ' '));
  return result;
};