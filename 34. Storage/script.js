// let submitBtn = document.querySelector(".btn-primary");
// let deleteBtn = document.querySelector(".btn-danger");
// let removeBtn = document.querySelector(".btn-success");

// submitBtn.addEventListener("click", function () {
//   localStorage.setItem("firstName", "Gulchin");
//   localStorage.setItem("lastName", "Babayeva");
//   localStorage.setItem("age", "23");
// });
// 1.1
// console.log(localStorage.getItem("firstName", "Gulchin").length);
// console.log(localStorage.getItem("lastName", "Babayeva").length);
// console.log(localStorage.getItem("age", "23").length);

//2
// for (let i=0; i < localStorage.length; i++)  {
//    console.log(localStorage.key(i))
// }

// // 3
// for (let i=0; i < localStorage.length; i++)  {
//    let values= localStorage.key(i)
//    console.log(localStorage.getItem(values))
// }

// //4
//  console.log(localStorage.key(0))

// // 4.1

//  let arr=[]
// for (let i=0; i < localStorage.length; i++)  {
//  arr.push(localStorage.key(i))
// }
// console.log(arr);


// // 5
//     let values= localStorage.key(0)
//     console.log(localStorage.getItem(values))

// //5.1

// 6
// deleteBtn.addEventListener("click", function () {
//   // delete localStorage.firstName;
//    localStorage.removeItem("firstName");
// });

// // 6.1
// removeBtn.addEventListener("click", function () {
//   localStorage.clear();
// });

///////// 7
const myForm = document.querySelector("#myForm");
const exampleInputUserName = document.querySelector("#name");
const exampleInputEmail1 = document.querySelector("#exampleInputEmail1");
const exampleInputPassword1 = document.querySelector("#exampleInputPassword1");
const exampleCheck1 = document.querySelector("#exampleCheck1");

const users = JSON.parse(localStorage.getItem("users")) || [];

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = {
    username: exampleInputUserName.value,
    email: exampleInputEmail1.value,
    password: exampleInputPassword1.value,
    check: exampleCheck1.checked,
  };
  if (user.username && user.email) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }
});

// 8
console.log(JSON.parse(localStorage.getItem("users  ")));
