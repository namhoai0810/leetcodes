// bai tap tim phuong phap tinh so buoc khac nhau de tong bang n
// voi cac buoc nhay la 1 va 2
// phuong phap duyet tu 2 den n
// so fibonacci la day co phong so truoc bang tong 2 so sau
// tim ra so fibonacci thu i

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 4) {
    return n;
  }

  let step = [1, 2];

  for (i = 2; i < n; i++) {
    step[i] = step[i - 1] + step[i - 2];
  }
  return step[i - 1];
};
