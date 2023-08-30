/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack = [];
  let num = 0;
  let str = '';

  for (let char of s) {
    if (char === '[') {
      stack.push([num, str]);
      num = 0;
      str = '';
    } else if (char === ']') {
      let [prevNum, prevStr] = stack.pop();
      str = prevStr + str.repeat(prevNum);
    } else if (!isNaN(char)) {
      num = num * 10 + Number(char);
    } else {
      str += char;
    }
  }

  while (stack.length) {
    let [prevNum, prevStr] = stack.pop();
    str = prevStr + str.repeat(prevNum);
  }

  return str;
};