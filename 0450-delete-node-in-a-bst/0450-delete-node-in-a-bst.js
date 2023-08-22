/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function minValue(node) {
  let current = node;

  while (current.left !== null) {
    current = current.left;
  }
  return current.val;
}
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (root === null) return null;

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) {
      const temp = root.right;
      root = null;
      return temp;
    } else if (!root.right) {
      const temp = root.left;
      root = null;
      return temp;
    }

    root.val = minValue(root.right);

    root.right = deleteNode(root.right, root.val);
  }
  return root;
};