function calculateDistance(point) {
  return point[0] ** 2 + point[1] ** 2;
}

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  const n = points.length;
  const map = [];

  for (let i = 0; i < n; i++) {
    map.push({
      distance: calculateDistance(points[i]),
      points: points[i]
    })
  }
  map.sort((a, b) => a.distance - b.distance);

  let result = [];
  for (let j = 0; j < k; j++) {
    result.push(map[j].points);
  }
  return k === n ? points : result;
};