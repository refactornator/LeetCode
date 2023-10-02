/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let n = nums.length;
  let result = new Array(n);

  // calculate prefix array
  result[0] = 1;
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  
  // calculate suffix array
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] = result[i] * right;
    right *= nums[i];
  }

  return result;
};