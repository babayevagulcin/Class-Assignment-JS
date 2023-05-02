import {  } from "./script.js     ";
let card = document.querySelector(".card");
let cardBody = document.querySelector(".card-body");

function cards() {
  books.forEach((item) => {
    cardBody.innerHTML += `
    <div class="col col-3 mb-5 mr-5 border p-3">
            <h5 class="card-publisher">
            ${item.id} ${item.publisher}
          </h5>
          <p class="card-year">
            ${item.year} ${item.authors}
          </p>
        <p class="card-title">${item.title}</p>
        <button  class="btn btn-primary">Add</button>
        </div>`;
  });
}
cards();
