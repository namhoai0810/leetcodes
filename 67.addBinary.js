/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// Input: a = "11", b = "1"
// Output: "100"
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

const a =  addBinary("11", "1");
console.log(a);