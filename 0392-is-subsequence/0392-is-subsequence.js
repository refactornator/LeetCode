/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length > t.length) return false;
  if (s === '') return true;

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < t.length) {
    if (s[pointer1] === t[pointer2]) {
      pointer1++;
      pointer2++;
      if (pointer1 === s.length) {
        return true;
      }
    } else {
      pointer2++;
    }
  }
  return false;
};