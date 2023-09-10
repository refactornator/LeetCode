
var HitCounter = function() {
  this.hits = new Array().fill(0);
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
  this.hits[timestamp] = (this.hits[timestamp] || 0) + 1;
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
  let sum = 0;
  for (let i = timestamp; i > 0 && i > timestamp - 300; i--) {
    const value = (this.hits[i] || 0);
    sum += value;
  }
  return sum;
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */