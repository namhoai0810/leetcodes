/**
 * @param {number[]} digits
 * @return {number[]}
 */
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// Plus 1 in array
// Convert to number use BigInt and join delete space plus 1 
// Convert to String then use split to add ,

var plusOne = function(digits) {
    const num = ((BigInt(digits.join("")) + BigInt(1)).toString()).split("");
    return num;
}; 
