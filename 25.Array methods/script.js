/////// 1 Splice
const arr1 = ["a", "b", "c", "d", "e"];
// 1.1
// arr1.splice(1,1)
// console.log(arr1);

// 1.2
// arr1.splice(2,2)
// console.log(arr1);

// 1.3
// arr1.splice(arr1.length-1)
// console.log(arr1);

// 1.4
// arr1.splice(arr1.length-3)
// console.log(arr1);

// 1.5
// arr1.splice(3, 0, "3", "4");
// console.log(arr1);

//1.6
arr1.splice(0, 2, "A", "B");
console.log(arr1);

///// 2.Slice Method
const arr2=['user1','user2','user3',11,3,5]
//2.1
const newArr=arr2.slice()
console.log(newArr);

// 2.2
const newArray=arr2.slice(1,5)
console.log(newArray);

// 2.3
const newArray1=arr2.slice(3)
console.log(newArray1);

// 3.Contact Method
const arr3=[1,2,3]
const arr33=[4,5,6]

// 3.1
const arr3WithArr33=arr3.concat(arr33)
console.log(arr3WithArr33);

// 3.2
const arr3WithNum=arr3.concat('a','b')
console.log(arr3WithNum);

// 4.forEach Method
const arr4=['name','surname',10,'age','city','uni',80,20]

// 4.1
arr4.forEach((item) =>{
    console.log(item);
}
)
// 4.2
const numMul=arr4.forEach(item=>{
    if (typeof item ==='number') {
    console.log(item*2);
    }
})
// 5.Map MEthod
const arr5=[4,5,6,'2',6,true,undefined,55]

//5.1
let arr5Map=arr5.map((item)=>console.log(item))

// 5.2
let arr5Map1=arr5.map((item)=>typeof item==='number'?item*=5:item)
console.log(arr5Map1)

// 5.3
const newArray4=arr5.map((item)=>String(item))
console.log(newArray4);

// 5.4
const newArray5=arr5.map((item)=>Boolean(item))
console.log(newArray5);
// 5.5
const newArray6=arr5.map((item)=>Number(item))
console.log(newArray6);








