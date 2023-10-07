/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const letters = new Map();

  for (let l of s) {
    letters.set(l, (letters.get(l) + 1 || 1))
  }

  for (let l of t) {
    if (!letters.has(l) || letters.get(l) === 0) {
      return l;
    } else {
      letters.set(l, letters.get(l) - 1);
    }
  }
};