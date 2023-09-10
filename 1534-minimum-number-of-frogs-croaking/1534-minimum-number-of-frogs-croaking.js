/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
  const croak = 'croak';
  const count = new Array(5).fill(0);
  let activeFrogs = 0;
  let maxFrogs = 0;

  for (let char of croakOfFrogs) {
    const index = croak.indexOf(char);

    count[index]++;
    if (index === 0) {
      activeFrogs++;
      maxFrogs = Math.max(maxFrogs, activeFrogs);
    } else {
      if (count[index] > count[index - 1]) return -1;
      if (index === 4) {
        activeFrogs--;
      }
    }
  }

  if (count[0] !== count[4]) {
    return -1;
  } else {
    return maxFrogs;
  }
};