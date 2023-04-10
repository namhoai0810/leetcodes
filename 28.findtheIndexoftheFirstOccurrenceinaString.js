/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */


// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// neu trong chuoi co ket qua trung voi chuoi can tim hien thi vi tri dau tien giong nhau
// neu khong giong nhau tra ve -1
// Phuong phap: duyet tu dau len cuoi tri di so luong phan tu cua mang so sanh
// tao 1 chuoi moi
// duyet tu dau vi tri i den i + chieu dai mang can so sanh
// cong chuoi voi vi tri j tach tung doan chuoi xem co trung khong
// neu trung 
var strStr = function(haystack, needle) {
    for(i = 0; i <= (haystack.length - needle.length); i++){
        let str = '';
        if(haystack[i]==needle[0]){
            for(j = i; j < i+ needle.length; j++){
            str+= haystack[j];
        }
        if(str == needle){
            return i;
        }
        }
        
    }
    return -1;
};