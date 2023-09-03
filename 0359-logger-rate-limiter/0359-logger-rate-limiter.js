
var Logger = function() {
  this.history = new Map();
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  if (this.history.has(message)) {
    if (this.history.get(message) <= timestamp) {
      this.history.set(message, timestamp + 10);
      return true;
    } else {
      return false;
    }
  } else {
    this.history.set(message, timestamp + 10);
    return true;
  }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */