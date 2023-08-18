/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  let visited = {};
  for(let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];

    if(difference in visited) {
      return [i, visited[difference]]
    }

    visited[nums[i]] = i
  }
};