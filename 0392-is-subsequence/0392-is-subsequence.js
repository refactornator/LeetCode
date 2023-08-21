/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length === 0) return true;
  if (t.length === 0) return false;

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < t.length) {
    if (s[pointer1] === t[pointer2]) {
      pointer1++;
      if (pointer1 === s.length) {
        return true;
      }
    }
    pointer2++;
  }
  return false;
};