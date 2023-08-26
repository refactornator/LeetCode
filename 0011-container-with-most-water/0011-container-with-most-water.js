/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxVolume = 0;

    while (left < right) {
        // Calculate the width
        const width = right - left;
        // Calculate the height which is the minimum of the two heights
        const currentHeight = Math.min(height[left], height[right]);
        // Calculate the current volume and update maxVolume if needed
        maxVolume = Math.max(maxVolume, width * currentHeight);

        // Move the pointer pointing to the shorter line inwards
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxVolume;
};