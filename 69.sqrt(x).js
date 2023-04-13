// tim so cang bac 2 cua x
// duyet tu dau den cuoi
// neu i mũ 2 lớn hơn x trả về i-1

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  for (i = 0; i <= x + 1; i++) {
    if (i * i > x) return i - 1;
  }
};
