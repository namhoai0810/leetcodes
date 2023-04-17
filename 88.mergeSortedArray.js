// * @param {number[]} nums1
// * @param {number} m
// * @param {number[]} nums2
// * @param {number} n
// * @return {void} Do not return anything, modify nums1 in-place instead.
// */

// Bai tap gop 2 mang roi sap xep lai bo di so 0
// Duyet tu cuoi k la so cuoi cung cua mang 1
// neu so thu m o mang 1 <  so thu n o mang 2
// so thu k se bang so thi n o mang 2
// se sap xep duoc nhung chua lay het so
// neu mang nao con thua so se lay tiep tu vi tri k
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = n + m - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] < nums2[j]) {
      nums1[k] = nums2[j];
      k--;
      j--;
    } else {
      nums1[k] = nums1[i];
      k--;
      i--;
    }
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
  while (i >= 0) {
    nums1[k] = nums2[i];
    k--;
    i--;
  }
};
