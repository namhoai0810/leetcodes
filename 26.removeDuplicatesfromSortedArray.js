/**
 * @param {number[]} nums
 * @return {number}
 */
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// xoa nhung so giong nhau va tra ve so phan tu cua mang
// phuong phap duyet tu dau den cuoi nhung khong tang bien dem len neu so thu 1 va so thu 2 bang nhau xoa phan tu do di
// neu khong bang nhau moi tang bien dem len
// tra ve so phan tu cua mang khi xong viec
var removeDuplicates = function (nums) {
  for (i = 0; i < nums.length - 1; ) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};
