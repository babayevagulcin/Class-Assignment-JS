//1
function isAnogram(str1,str2) {
    return(
      str1.toLowerCase().replace().split('').sort((a,b)=>a.localeCompare(b)).join('')==str2.toLowerCase().replace().split('').sort((a,b)=>a.localeCompare(b)).join('')
    )
    };
//     const arr = str =>
//     str
//       .toLowerCase()
//       .replace()
//       .split('')
//       .sort()
//       .join('');
//   return arr(str1) === arr(str2);

console.log(isAnogram('Sevil','EvilS'));//true
console.log(isAnogram('Maqa','qaqam'));//false

//2
function maxChar(str) {
    let max=0
    let commonLatter=""
    str.split('').forEach((char) => {
        if(str.toLocaleLowerCase().split(char).length-1>max){
            max=str.split(char).length-1
            commonLatter=char
        }
    });
    return commonLatter
}
console.log(maxChar('Tlftftaft'));//t
console.log(maxChar('Gence'));//e