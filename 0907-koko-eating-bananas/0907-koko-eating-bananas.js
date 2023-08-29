/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let low = 1, high = Math.max(...piles);

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (canEatAll(piles, h, mid)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

function canEatAll(piles, h, k) {
  let totalHours = 0;
  for (let pile of piles) {
    totalHours += Math.ceil(pile / k);
  }
  return totalHours <= h;
}