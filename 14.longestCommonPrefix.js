/**
 * @param {string[]} strs
 * @return {string}
 */
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Phuong phap duyet tu dau den cuoi phan tu dau tien cua mang
// Voi moi chuoi trong mang so sanh tung ki tu voi tung ki tu cua phan tu dau tien
// neu khong giong cat chuoi dau tien tu vi tri 0 den vi tri i trong chuoi dau tien

var longestCommonPrefix = function (strs) {
  for (i = 0; i <= strs[0].length; i++) {
    if (!strs.every((string) => string[i] === strs[0][i])) {
      return strs[0].slice(0, i);
    }
  }
  return strs[0];
};
