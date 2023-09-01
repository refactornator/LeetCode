/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function(root, queries) {
  const heights = {};
  const resultHeights = {};

  function getMaxHeight(node) {
    if (node === null) return 0;
    if (heights[node.val]) return heights[node.val];
    
    heights[node.val] = 1 + Math.max(getMaxHeight(node.left), getMaxHeight(node.right));
    return heights[node.val];
  }

  function dfs(node, currentDepth, maxDepthWithoutCurrentNode) {
    if (node === null) return 0;
    
    resultHeights[node.val] = maxDepthWithoutCurrentNode;
    
    dfs(node.left, currentDepth + 1, Math.max(maxDepthWithoutCurrentNode, currentDepth + getMaxHeight(node.right)));
    dfs(node.right, currentDepth + 1, Math.max(maxDepthWithoutCurrentNode, currentDepth + getMaxHeight(node.left)));
  }

  dfs(root, 0, 0);
  return queries.map(query => resultHeights[query]);
};