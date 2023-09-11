/**
 * Sort the intervals by their starting points.
 *  Push the first interval to a result list.
 *  For each of the following intervals:
 *  a. If the current interval's start point is less than or equal to the end point of the last interval in the result list, then there's an overlap. Merge the intervals by updating the end point of the last interval in the result list with the maximum of the two end points.
 *  b. If there's no overlap, simply add the current interval to the result list.
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (!intervals.length) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    let lastInterval = result[result.length - 1];

    if (currentInterval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(currentInterval[1], lastInterval[1])
    } else {
      result.push(currentInterval);
    }
  }
  
  return result;
};