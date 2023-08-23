/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  function palindrome(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let testOddPalindrome = palindrome(i, i);
    if (testOddPalindrome.length > longest.length) {
      longest = testOddPalindrome;
    }

    let testEvenPalindrome = palindrome(i, i + 1);
    if (testEvenPalindrome.length > longest.length) {
      longest = testEvenPalindrome;
    }
  }
  return longest;
};