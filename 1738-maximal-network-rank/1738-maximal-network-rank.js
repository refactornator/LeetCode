/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
  const adjList = new Array(n).fill(0).map(() => new Set());

  // Build the adjacency list
  for (let [a, b] of roads) {
    adjList[a].add(b)
    adjList[b].add(a);
  }

  let maxRank = 0;

  // Compute network rank for each pair of cities
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let rank = adjList[i].size + adjList[j].size;
      if (adjList[i].has(j)) {
        rank--;
      }
      maxRank = Math.max(maxRank, rank);
    }
  }
  return maxRank;
};