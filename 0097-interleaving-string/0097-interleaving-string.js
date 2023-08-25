/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  // Initialize the dp table
  let dp = Array(s1.length + 1).fill(null).map(() => Array(s2.length + 1).fill(false));
  dp[0][0] = true;

  // Fill the dp table
  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i > 0) {
        dp[i][j] = dp[i][j] || (dp[i-1][j] && s1[i-1] === s3[i+j-1]);
      }
      if (j > 0) {
        dp[i][j] = dp[i][j] || (dp[i][j-1] && s2[j-1] === s3[i+j-1]);
      }
    }
  }
  
  return dp[s1.length][s2.length];
};