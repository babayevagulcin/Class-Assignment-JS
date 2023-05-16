const API_URL = " https://restcountries.com/v2/all";
let rowCard = document.querySelector(".countries");
let select = document.querySelector("#country");
let search = document.querySelector("#search");

function cardData(data) {
  rowCard.innerHTML = "";
  data.forEach((item) => {
    rowCard.innerHTML += `
        <div class="col col-3 mb-2">
            <a href="details.html?name=${
                item.name
              }">
              <div class="card style="width: 18rem;">
                <img src="${item.flags.svg}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-text">Population:${item.population}</p>
                  <p class="card-text">Region:${item.region}</p>
                  <p class="card-text">Captial:${item.capital}</p>
                </div>
              </div>
            </a>
          </div>
         `;
  });
}
window.addEventListener("load", function () {
  fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((data) => {
      cardData(data);
    });
});

select.addEventListener("change", function (e) {
  console.log(e.target.value);
  fetch(`${API_URL}`)
    .then((res) => res.json())
    .then((data) => {
      let filteredCards = data.filter(
        (item) =>
          item.region.toLocaleLowerCase() == e.target.value.toLocaleLowerCase()
      );
      console.log(filteredCards);
      cardData(filteredCards);
    });
});
search.addEventListener("input", function (e) {
  fetch(`${API_URL}`)
    .then((res) => res.json())
    .then((data) => {
      let filtered = data.filter((item) =>
        item.name
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );

      cardData(filtered);
    });
});
