/////// 6.Filter Method
const mixArray=['1',2,4,'a',false,'9',12,undefined,3,true,null]
// 6.1
const newMixarr=mixArray.filter((item)=>typeof item==='number')
console.log(newMixarr);

// 6.2
const newMixarr1=mixArray.filter((item)=>typeof item==='string')
console.log(newMixarr1);

// 6.3
const newMixarr2=mixArray.filter((item)=>typeof item==='boolean')
console.log(newMixarr2);

// 6.4
const newMixarr3=mixArray.filter(item => !item)
console.log(newMixarr3); 

/////// 7.Filter and Map Methods
// convert to "number" each value of "arr7" and find max value in "arr7"
const arr7=[44,3,6,'2',6,true,undefined,'55',null]

// 7.1
const newArr9=arr7.filter(item=>Number(item))
const newArr10=Math.max(...newArr9.map((item)=> item)) 
console.log(newArr10);