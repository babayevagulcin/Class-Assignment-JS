// 1.Filter out Strings from an Array///////////////////////////////////////////////////

function filterArray(arr) {
  return arr.filter((item) => typeof item === "number");
}
console.log(filterArray([1, "c", 2, "a", "b"]));
console.log(filterArray(["4", 1, "a", "b", 0, 15]));

// 2.Summing a Slice////////////////////////////////////////////////////////////////////

function sliceSum(arr, n) {
    return arr.slice(0, n).reduce((sum, curr) => sum + curr, 0);

}
console.log(sliceSum([9, 8, 7, 6], 3));
console.log(sliceSum([1, 3, 2], 2));
console.log(sliceSum([3, 6, 2], 0));

// 3.Spelling it Out////////////////////////////////////////////////////////////////////
// Create a function called 'spelling(str)' which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

function spelling(str) {
  return str.split("").map((el, index) => str.slice(0, index + 1));
}
console.log(spelling("bee"));
console.log(spelling("happy"));
// 4.Hashes and Pluses//////////////////////////////////////////////////////////////////
// Create a function caled "hashPlusCount(str)" that returns the number of hashes and pluses in a string.

// hashPlusCount("###+") // [3, 1]
// hashPlusCount("#+++#+#++#") // [4, 6]
// hashPlusCount("") // [0, 0]
function hashPlusCount(str) {
    let hashes=0
    let pluses=0
     str.split("").map((item) => item==="#"?hashes+=1:pluses+=1);
     return [hashes,pluses]
}
console.log( hashPlusCount("###+"));
console.log( hashPlusCount("#+++#+#++#"));
console.log( hashPlusCount(""));

// 5.Reverse the Case////////////////////////////////////////////////////////////////////
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.

// reverseCase("Happy Birthday") //"hAPPY bIRTHDAY"
// reverseCase("MANY THANKS") //"many thanks"
function reverseCase(str){
   return str.split('').map((item)=>item.toLowerCase()===item?item.toUpperCase():item.toLowerCase()).join
}