const arr = ["6", 8, NaN, "0", 5, 4, "true", false, 7, "a", undefined, 8, true];
// 1
const falsyValue = (myArray) => {
  let newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (!myArray[i]) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
};
console.log(falsyValue(arr));

// 2
const stringValues = (myArr) => {
  let newArray = [];
  for (let i = 0; i < myArr.length; i++) {
    if (typeof myArr[i] === "string") {
      newArray.push(myArr[i]);
    }
  }
  return newArray;
};
console.log(stringValues(arr));

// 3
const sliceArr = (myArray) => {
  let newArray = [];
  for (let i = 3; i < 8; i++) {
    newArray.push(myArray[i]);
  }
  return newArray;
};
console.log(sliceArr(arr));

// 4
const sumArr = (myArray) => {
  let sum = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (typeof myArray[i] === "number" && myArray[i]) {
      sum += myArray[i];
    }
  }
  return sum;
};
console.log(sumArr(arr));
// 5
const findLastIndex = (myArray) => {
  for (let i = myArray.length; i > 0; i--) {
    if (myArray[i] === 8) {
      return i;
    }
  }
};
console.log(findLastIndex(arr));

// 6
const reverseArr = (myArray) => {
  let newArray = [];
  for (let i = myArray.length - 1; i > 0; i--) {
    newArray.push(myArray[i]);
  }
  return newArray;
};
console.log(reverseArr(arr));

// 7
const arrNum = [8, 3, 22, 1, 12, 11, 9, 0, 10, 14, 41, 55, 51];

let sortArr = (myArray) => {
  let sorting = true;
  while (sorting) {
    sorting = false;
    for (let i = 0; i < myArray.length; i++) {
      let temp = myArray[i];
      if (myArray[i] > myArray[i + 1]) {
        sorting = true;
        myArray[i] = myArray[i + 1];
        myArray[i + 1] = temp;
      }
    }
  }
  return myArray;
};
console.log(sortArr(arrNum));

// 8
const arrLetters = ["g", "d", "a", "c", "j", "b", "e"];
function sortLetters(myArr) {
    for(let i = 0; i < myArr.length - 1; i++) {
    for(let j = 0; j < myArr.length - 1 - i; j++) {
    if(myArr[j] > myArr[j+1]) {
    let temp = myArr[j];
    myArr[j] = myArr[j+1];
    myArr[j+1] = temp;
    }
    }
    }
    return myArr;
    }
    
console.log(sortLetters(arrLetters)); //['a', 'b', 'c', 'd', 'e', 'g', 'j']
// 9
const arr9 = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
];
function flatArr(myArr) {
  let newArray = [];
  for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < myArr[i].length; j++) {
      newArray.push(myArr[i][j]);
    }
  }
  return newArray;
}
console.log(flatArr(arr9));


/////////////////////////////////////////////////////////////////////////////////////////////////////////
