/**
 * @param {string} s
 * @return {number}
 */
// Viet lai so tu so la ma sang so binh thuong
// Phuong phap la duyet tung so la ma neu so tiep theo lon hon so hien tai
// tong bang so tiep theo tru so hien tai
// neu so tiep theo khong lon hon thi tong bang tong cong so hien tai
var romanToInt = function (s) {
  const syn = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  for (i = 0; i < s.length; i++) {
    let current = syn[s[i]];
    let next = syn[s[i + 1]];
    // neu so hien tai so hon so tiep theo thi tong bang so tiep - so hien tai
    // cong i them 1 de bo qua so tiep theo
    if (current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  return result;
};
