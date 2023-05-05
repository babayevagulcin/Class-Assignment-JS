// function api() {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((result) => result.json())
//     .then((data) => console.log(data));
// }
// api();

// function apiComlated() {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((result) => result.json())
//     .then((data) => {
//       let newArray = data.filter((item) => item.completed);
//       console.log(newArray);
//     });
// }
// apiComlated();

// function apiUserId() {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((result) => result.json())
//     .then((data) => {
//       let filterData = data.filter((item) => item.userId === 2);
//       console.log(filterData);
//     });
// }
// apiUserId();
