/////////////// 1.reverse string
function reverseString(str) {
  return str.split("").reverse("").join("");
}
console.log(reverseString("Babayeva"));

function reverseString(str) {
  let result = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("Babayeva"));

/////////////// 2.polidrom
function isPolidrom(word) {
  if (word === word.split("").reverse().join("")) {
    return `Yes ${word} is polidrom`;
  } else return `No ${word} is not polidrom`;
}
console.log(isPolidrom("refer"));
console.log(isPolidrom("hello"));
function isPolidrom2(word) {
  word === word.split("").reverse().join("")
    ? console.log(`Yes ${word} is polidrom`)
    : console.log(`No ${word} is not polidrom`);
}
isPolidrom2("isim");

/////////////// 3.remove dublicated
let arr1 = [1, 2, 2, 2, 11, 4, 5, 4, 11];
function removeDublcated(arr) {
  return arr.filter((el, index) => arr.indexOf(el) == index);
}
console.log(removeDublcated(arr1));

function removeDublcated1(arr) {
  let result = [];
  arr.forEach((element) => {
    !result.includes(element) && result.push(element);
  });
  return result;
}

console.log(removeDublcated1(arr1));

function removeDublcated2(arr) {
  return [...new Set(arr)];
}

console.log(removeDublcated2(arr1));

/////////////// 4.generate otp
function generateOtp() {
  let digits = "123456789";
  let num = "";
  for (let i = 0; i < 4; i++) {
    num += digits[Math.floor(Math.random() * 10)];
  }
  return num;
}
console.log(generateOtp());

/////////////// 5.find all truth values
