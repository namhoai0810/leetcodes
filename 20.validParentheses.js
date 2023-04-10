// Input: s = "()[]{}"
// Output: true
// kiem tra dau dong ngoac va mo ngoac phai cung loai
// dong mo phai theo thu tu
// moi dau dong ngoac va mo ngoac phai cung loai
// phuong phap
// neu gap dau mo thi push vao mang dau dong
// neu gap dau dong thi so sanh phan tu cuoi cung voi dau dong
// neu khac nhau thi flase
// giong nhau thi pop ra ngoai so sanh dau dong tiep theo
// neu stack cuoi cung == 0 thi true
const syn = {
  "{": "}",
  "[": "]",
  "(": ")",
};
var isValid = function (s) {
  const stack = [];
  for (i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
      stack.push(syn[s[i]]);
    } else if (stack.pop() !== s[i]) {
      return flase;
    }
  }
  return stack.length === 0;
};
