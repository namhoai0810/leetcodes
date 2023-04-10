//Tim tu cuoi cung trong chuoi co bao nhieu chu cai
// Phuong phap duyet tu cuoi len dau
// neu gap khong trang ma bien tmp > 0 tra ve bien tmp . Neu gap khong trang o cuoi
// thi bien tmp =0
//Neu o cuoi cung la khong trong them continues de khong cong bien tmp len 1
// Gap khong trong lan 2 thi tra ve so luong cu phan tu trong day


/**
 * @param {string} s
 * @return {number}
 */

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.


var lengthOfLastWord = function(s) {
    let tmp = 0;
    for(i = s.length-1;i>=0 ;i--){
        if(s[i] == " "){
            if(tmp > 0){
                return tmp;
            }
            continue;
        }
    tmp += 1;
    }
    return tmp;
};