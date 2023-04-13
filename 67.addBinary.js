/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// Input: a = "11", b = "1"
// Output: "100"
// Input: a = "1010", b = "1011"
// Output: "10101"
// Cong nhi phan 2 chuoi so
// Phuong phap duyet tu cuoi ca 2 chu so, giam dan so chieu dai cua chuoi so
// cong bien tong voi so a va so b va bien tmp
// neu lon hon 1 thi chia lay du cho 2 bien nho tmp = 1
// gan ket thu duoc vao chuoi result 
var addBinary = function(a, b) {
   let tmp = 0;
   let result ="";
   
   let lenA = a.length - 1;
   let lenB = b.length - 1;

   for(;lenA >= 0 || lenB >= 0 || tmp > 0; lenA--, lenB--){
    let sum = (+a[lenA] || 0) + (+b[lenB] || 0) + tmp;
    if(sum > 1){
        sum = sum % 2;
        tmp = 1;
    }else{
        tmp = 0;
    }
    result = `${sum}${result}`;
   }
   return result
};

// const a =  addBinary("11", "1");
// console.log(a);