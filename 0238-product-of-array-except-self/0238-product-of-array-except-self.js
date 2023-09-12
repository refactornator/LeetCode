/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);
    const result = new Array(n);

    // Compute prefix products
    let leftProduct = 1;
    for (let i = 1; i < n; i++) {
        leftProduct *= nums[i - 1];
        left[i] = leftProduct;
    }

    // Compute suffix products
    let rightProduct = 1;
    for (let i = n - 2; i >= 0; i--) {
        rightProduct *= nums[i + 1];
        right[i] = rightProduct;
    }

    // Compute result using left and right arrays
    for (let i = 0; i < n; i++) {
        result[i] = left[i] * right[i];
    }

    return result;
};