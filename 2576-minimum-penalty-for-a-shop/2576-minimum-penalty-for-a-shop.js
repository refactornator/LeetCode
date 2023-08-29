/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
  let currentPenalty = (customers.match(/Y/g) || []).length;
  let minimumPenalty = currentPenalty;
  let earliestHour = 0;

  for (let i = 0; i < customers.length; i++) {
    const char = customers[i];

    if (char === 'Y') {
      currentPenalty--;
    } else {
      currentPenalty++;
    }

    if (currentPenalty < minimumPenalty) {
      earliestHour = i + 1;
      minimumPenalty = currentPenalty;
    }
  }

  return earliestHour;
};