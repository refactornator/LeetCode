/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  const n = spells.length;
  const m = potions.length;
  const pairs = new Array(n).fill(0);

  potions.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let left = 0;
    let right = m - 1;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (spells[i] * potions[mid] >= success) {
        pairs[i] = m - mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return pairs;
};