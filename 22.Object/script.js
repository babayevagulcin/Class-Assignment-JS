/////  ARRAY  ////

// 1
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log({arr});

// 2
const arr2 = [5, "GDU", true];
console.log({arr2});

// 3
const arr3 = [1, 2, 3, 4, 5];
const arr4 = arr3;
console.log({arr4});

// // 4
const arr5=[0,1,2,3,4,5,6,7];
arr5.push(8,9)
console.log({arr5});

// 5
const arr6=[]
arr6.push(5,6,7)
arr6.pop()
arr6.unshift(1)
console.log({arr6});

// 6
const arr7=["Gulchin","Babayeva",20,"Quba"]
arr7[3]="Qusar"
console.log({arr7});

// 7
for(let value of arr){
    console.log({value});
}


///// OBJECT /////
//8
const obj = {
  id: 3,
  firstName: "Gulchin",
  lastName: "Babayeva",
  location: "GDU 2",
};
console.log(obj);

//9
const obj2 = obj;

//10

obj2[0] = 1;
console.log("obj2", obj2);

//11
for (let value in obj) {
  console.log(obj[value]);
}

//12
for (let key in obj) {
  console.log(key);
}

//13
delete obj.location;
console.log(obj);

//14
const newObj = [];
const newObject2 = Object.assign(obj);
