///////////// 1
// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
// console.log: ['GubA', 'MingeceviR', 'BakU', 'GazaG', 'GencE', 'ShirvaN']
const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan']

for (let i = 0; i < arr1.length; i++) {
    
  arr1.map((item)=>item[0].toUpperCase() + item.slice(1, - 1) + item.at(-1).toUpperCase() )
  
}
console.log(arr1);

///////////// 2
///////////// 3
///////////// 4
///////////// 5
///////////// 6 