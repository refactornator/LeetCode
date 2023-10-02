/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
  let repeating = 0;

  while (sequence.includes(word.repeat(repeating + 1))) {
    repeating++;
  }

  return repeating;
};