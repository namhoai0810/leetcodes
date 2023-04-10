/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// De bai xoa phan tu co gia tri bang val
// Phuong phap duyet tu dau den cuoi nhung khong tang bien dem len
// neu phan tu hien tai bang voi val xoa phan tu hien tai di khoi day
// neu khong bang tang bien dem len 1
// tra ve so phan tu con lai cua mang nums
var removeElement = function (nums, val) {
  for (i = 0; i <= nums.length - 1; ) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};
