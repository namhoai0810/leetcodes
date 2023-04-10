/**
 * @param {number} x
 * @return {boolean}
 */
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// dao nguoc lai so bang cach tach so tu cuoi len dau
var isPalindrome = function (x) {
  let result = 0;
  let temp = x;
  while (temp > 0) {
    result = result * 10 + (temp % 10);
    temp = ~~(temp / 10);
  }
  return result == x;
};
