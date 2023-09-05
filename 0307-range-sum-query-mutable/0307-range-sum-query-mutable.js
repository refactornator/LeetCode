/**
 * @param {number[]} nums
 */
class NumArray {
  constructor(nums) {
    this.n = nums.length;
    this.tree = new Array(this.n * 4).fill(0);
    this.buildTree(nums, 0, 0, this.n - 1);
  }

  buildTree(nums, treeIndex, l, r) {
    if (l === r) {
      this.tree[treeIndex] = nums[l];
      return;
    }

    let mid = Math.floor((l + r) / 2);
    this.buildTree(nums, 2 * treeIndex + 1, l, mid);
    this.buildTree(nums, 2 * treeIndex + 2, mid + 1, r);

    this.tree[treeIndex] = this.tree[2 * treeIndex + 1] + this.tree[2 * treeIndex + 2];
  }

  update(index, val) {
    this.updateTree(0, 0, this.n - 1, index, val);
  }

  updateTree(treeIndex, l, r, index, val) {
    if (l === r) {
      this.tree[treeIndex] = val;
      return;
    }

    let mid = Math.floor((l + r) / 2);
    if (index <= mid) {
      this.updateTree(2 * treeIndex + 1, l, mid, index, val);
    } else {
      this.updateTree(2 * treeIndex + 2, mid + 1, r, index, val);
    }

    this.tree[treeIndex] = this.tree[2 * treeIndex + 1] + this.tree[2 * treeIndex + 2];
  }

  sumRange(left, right) {
    return this.query(0, 0, this.n - 1, left, right);
  }

  query(treeIndex, l, r, i, j) {
    if (l > j || r < i) return 0;

    if (i <= l && j >= r) return this.tree[treeIndex];

    let mid = Math.floor((l + r) / 2);
    return this.query(2 * treeIndex + 1, l, mid, i, j) + this.query(2 * treeIndex + 2, mid + 1, r, i, j);
  }
}

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */