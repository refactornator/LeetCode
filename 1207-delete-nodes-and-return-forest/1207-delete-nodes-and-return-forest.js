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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
  const toDeleteSet = new Set(to_delete);
  const result = [];

  function helper(node, isRoot) {
    if (!node) return null;
    const shouldDelete = toDeleteSet.has(node.val);
    if (!shouldDelete && isRoot) result.push(node);
    node.left = helper(node.left, shouldDelete);
    node.right = helper(node.right, shouldDelete);
    return shouldDelete ? null : node;
  }

  helper(root, true);
  return result;
};