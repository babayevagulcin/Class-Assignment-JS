//EXAMPLE 1
let myName = "Gulchin";
for (let i = 0; i < myName.length; i++) {
  console.log(myName[i]);
}

//EXAMPLE 2
for (let a = 1; a < 9; a++) {
  if (a % 2 == 0) console.log(a);
}

//EXAMPLE 3
for (let index = 0; index < 7; index++) {
  if (index != 0) {
    if (index % 2 == 0) {
      console.log(`even number ${index}`);
    } else {
      console.log(`odd number ${index}`);
    }
  }
  console.log();
}