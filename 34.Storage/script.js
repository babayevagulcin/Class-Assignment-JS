let submitBtn = document.querySelector(".btn-primary");
let deleteBtn = document.querySelector(".btn-danger");
let removeBtn = document.querySelector(".btn-success");

submitBtn.addEventListener("click", function () {
  localStorage.setItem("firstName", "Gulchin");
  localStorage.setItem("lastName", "Babayeva");
  localStorage.setItem("age", "23");
});
// 1.1
// console.log(localStorage.getItem("firstName", "Gulchin").length);
// console.log(localStorage.getItem("lastName", "Babayeva").length);
// console.log(localStorage.getItem("age", "23").length);

// // //2
// for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   console.log(`${key}`);
// }

// // 3
// for (let i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.getItem(localStorage.key(i)));
// }

// //4
// let firstKey = localStorage.key(0);
// console.log(firstKey);

// // 4.1

// for (let i = 0; i < localStorage.length; i++) {
//   let arr = localStorage.key(i);
//   console.log(`${JSON.stringify(arr)}`);
// }

// // 5
// for (let i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.getItem(localStorage.key(0)));
// }
// //5.1

// 6
// deleteBtn.addEventListener("click", function () {
//   delete localStorage.firstName;
//   // localStorage.removeItem("firstName");
// });

// // 6.1
// removeBtn.addEventListener("click", function () {
//   localStorage.clear();
// });

///////// 7
