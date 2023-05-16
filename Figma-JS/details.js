let id = new URLSearchParams(window.location.search).get("name");
const BASE_URL = " https://restcountries.com/v3.1/name/";

// fetch(`${BASE_URL}${id}`)
//   .then((res) => res.json())
//   .then((data) => {
//     body.innerHTML = data.body;
//     title.innerHTML = data.title;
//     author.innerHTML = data.author;
//     console.log(data);
//   });