// 1
let myText =
  "An Array is a colletion of items of same data type stored at contiguos memory locations.";
let count = 0;
for (let i = 0; i < myText.length; i++) {
  if (myText[i] == "a" || myText[i] == "A") {
    //   if (myText[i].toLowerCase() == "a")
    count++;
  }
}
console.log(count);

//2
const arr1 = [1, 2, 4, 5, 7, 9, 13, 22];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum += arr1[i];
}
console.log(sum);

// 3
const arr2 = [false, 0, 2, true, 23, undefined, "are u stack?", "come on"];
const newArr=[]
for (let i = 0; i < arr2.length; i++){
    if (i % 2){
        newArr.push(arr2[i])
    }
}console.log(newArr);

// 4
let text1 = "How is it going?";
let newText = " ";
for (let i = 0; i < text1.length; i++) {
  if (text1[i] != "i") {
    newText += text1[i];
  }
}
console.log(newText);

// 5
const numbersArr = [2, false, "5", "true", 9, 0, "1"];
let sum1 = 0;
for (let i = 0; i < numbersArr.length; i++) {
  if (typeof (numbersArr[i]) === "number") {
    sum1 += numbersArr[i];
  }
}
console.log(sum1);


// 6
const mixType = [1, "3", 4, false, null, 22, true];
let stringType = [];
for (let i = 0; i < mixType.length; i++) {
  stringType.push(String(mixType[i])); 
}
console.log(stringType);
// 7
