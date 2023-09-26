/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
  this.snapshots = Array.from({ length }).map(() => ({}));
  this.snapId = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  this.snapshots[index][this.snapId] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  return this.snapId++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  while (snap_id >= 0) {
    if (this.snapshots[index].hasOwnProperty(snap_id)) {
      return this.snapshots[index][snap_id];
    }
    snap_id--;
  }
  return 0;  // default value if not found
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */