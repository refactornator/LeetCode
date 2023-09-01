function partition(nums, left, right, pivotIndex) {
    let pivot = nums[pivotIndex];
    // Move the pivot to the end of the array
    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

    let storeIndex = left;
    for (let i = left; i <= right - 1; i++) {
        if (nums[i] < pivot) {
            [nums[storeIndex], nums[i]] = [nums[i], nums[storeIndex]];
            storeIndex++;
        }
    }

    // Move pivot to its final place
    [nums[right], nums[storeIndex]] = [nums[storeIndex], nums[right]];
    return storeIndex;
}

function quickSelect(nums, left, right, kSmallest) {
    if (left === right) return nums[left];

    let pivotIndex = Math.floor(Math.random() * (right - left)) + left;
    pivotIndex = partition(nums, left, right, pivotIndex);

    if (kSmallest === pivotIndex) {
        return nums[kSmallest];
    } else if (kSmallest < pivotIndex) {
        return quickSelect(nums, left, pivotIndex - 1, kSmallest);
    } else {
        return quickSelect(nums, pivotIndex + 1, right, kSmallest);
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const n = nums.length;

  return quickSelect(nums, 0, n - 1, n - k);
};