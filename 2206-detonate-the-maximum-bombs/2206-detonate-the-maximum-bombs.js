function isInRange(bomb1, bomb2) {
  // Check if bomb2 is in the range of bomb1
  const [x1, y1, r1] = bomb1;
  const [x2, y2] = bomb2;
  return (x2 - x1) ** 2 + (y2 - y1) ** 2 <= r1 ** 2;
}
/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
  const n = bombs.length;
  const graph = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && isInRange(bombs[i], bombs[j])) {
        graph[i].push(j);
      }
    }
  }

  function dfs(node, visited) {
    if (visited[node]) {
      return 0;
    }
    visited[node] = true;
    let count = 1;
    for (const neighbor of graph[node]) {
      count += dfs(neighbor, visited);
    }
    return count;
  }

  let maxBombs = 0;
  for (let i = 0; i < n; i++) {
    const visited = Array(n).fill(false);
    maxBombs = Math.max(maxBombs, dfs(i, visited));
  }
  return maxBombs;
};