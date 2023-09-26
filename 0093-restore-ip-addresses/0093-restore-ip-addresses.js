/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const result = [];

  function isValid(str) {
    if (+str > 255 || !str.length) return false;
    if (str.length >= 2 && str[0] === '0') return false;
    return true;
  }

  function iterate(str, arr) {
    if (arr.length === 3) {
      if (isValid(str)) {
        result.push([...arr, str]);
      }
      return;
    }

    for (let i = 1; i < 4; i++) {
      let subStr = str.slice(0, i);
      if (!isValid(subStr)) continue;
      iterate(str.slice(i), [...arr, subStr]);
    }
  }

  iterate(s, []);
  return result.map(x => x.join('.'));
};