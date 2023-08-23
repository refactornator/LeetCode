/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
  let freqMap = new Map();

  for (let ch of s) {
    freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
  }

  let maxHeap = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

  let result = '';
  let prevChar = null;
  let prevFreq = 0;

  while (maxHeap.length) {
    let [ch, freq] = maxHeap.shift();

    result += ch;
    freq--;

    if (prevFreq > 0) maxHeap.push([prevChar, prevFreq]);

    maxHeap.sort((a, b) => b[1] - a[1]);

    prevChar = ch;
    prevFreq = freq;
  }

  if (result.length === s.length) {
    return result;
  } else {
    return "";
  }
};