/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let maxAverage = -Number.MAX_VALUE;

  for (let i = 0; i <= nums.length - k; i++) {
    let window = 0;
    for (let j = i; j < i + k; j++) {
      window += nums[j];
    }
    maxAverage = Math.max(maxAverage, window / k);
  }

  return maxAverage;
};