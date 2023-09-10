
var HitCounter = function() {
  this.timestamps = new Array(300).fill(0);  // array to store timestamps
  this.hits = new Array(300).fill(0);        // array to store hit counts for corresponding timestamps
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
  let index = timestamp % 300;
  if (this.timestamps[index] !== timestamp) {
    // if the current timestamp is different from the recorded one (older than 300s), reset the hit count
    this.timestamps[index] = timestamp;
    this.hits[index] = 1;
  } else {
    // if the current timestamp is the same, just increment the hit count
    this.hits[index]++;
  }
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
  let total = 0;
  for (let i = 0; i < 300; i++) {
    // only sum up the counts of hits that happened in the last 300 seconds
    if (timestamp - this.timestamps[i] < 300) {
      total += this.hits[i];
    }
  }
  return total;
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */