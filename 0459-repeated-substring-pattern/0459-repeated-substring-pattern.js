/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const len = s.length;

  for (let i = 1; i <= Math.floor(len / 2); i++) {
    if (len % i === 0) {
      let repeatTimes = len / i;
      let substring = s.substring(0, i);
      let builtString = '';

      for (let j = 0; j < repeatTimes; j++) {
        builtString += substring;
      }

      if (builtString === s) {
        return true;
      }
    }
  }
  return false;
};