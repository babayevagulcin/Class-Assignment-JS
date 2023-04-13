// 1
const arr1 = ["a", "b", "c", "d", "e", "f", "j", "k", "y", "u"];
function getRandomLetter(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandomLetter(arr1));

// 2
const arr2 = [1, 2, 3, 4, 14, 5, 6, 8];
let sum=0
function calcSum(arr) {
    for (let item of arr) {
        if (item % 2 == 0) {
            sum+=item    
        }
    }
    return sum
}
console.log(calcSum(arr2));

// 3
const arr3=[-3,-5,-9,3,0,true.false,-22]
const newArry=[]
const getPositiveNam=function(){
    for (i=0;i<arr3.length;i++){
        newArry.push(Math.abs(arr3[i]))
    }
    return newArry
}
console.log(getPositiveNam());

// 4
const arr4=[4,9,16,18,30,36,50]
const newArry2=[]
const calcSquareRoot=(x)=>{
    for (let i = 0; i < x.length; i++) {
        newArry2.push(parseInt(Math.sqrt(x[i])))
        
    }
    return newArry2
}
console.log(calcSquareRoot(arr4));