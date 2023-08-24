/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // Ensure that the first array (nums1) is the smaller array. If not,
  // swap the two array. This is just to ensure that the binary search
  // is performed on the smaller array, improving efficiency.
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;

  let nums1Min = 0; nums1Max = m, half_len = Math.floor((m + n + 1) / 2);

  // Use binary search on the smaller array to partition it such that there are
  // an equal number of elements on the left side of the partition in both
  // arrays combined as there are on the right side.
  while(nums1Min <= nums1Max) {
    let nums1Index = Math.floor((nums1Min + nums1Max) / 2);
    let nums2Index = half_len - nums1Index;

    // Use the binary search partition on the first array to determine
    // the partition on the second array.
    if (nums1Index < m && nums2[nums2Index - 1] > nums1[nums1Index]) {
      nums1Min = nums1Index + 1;
    } else if (nums1Index > 0 && nums1[nums1Index - 1] > nums2[nums2Index]) {
      nums1Max = nums1Index - 1;
    } else {
      // Once you have the partitions, you can determine the median based
      // on the values around the partition.
      let max_of_left, min_of_right;
      if (nums1Index === 0) max_of_left = nums2[nums2Index - 1];
      else if (nums2Index === 0) max_of_left = nums1[nums1Index - 1];
      else max_of_left = Math.max(nums1[nums1Index - 1], nums2[nums2Index - 1]);

      if ((m + n) % 2 === 1) return max_of_left;

      if (nums1Index === m) min_of_right = nums2[nums2Index];
      else if (nums2Index === n) min_of_right = nums1[nums1Index];
      else min_of_right = Math.min(nums2[nums2Index], nums1[nums1Index]);

      return (max_of_left + min_of_right) / 2.0;
    }
  }
  return 0.0;
};