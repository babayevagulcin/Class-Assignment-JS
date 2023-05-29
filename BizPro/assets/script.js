const API_URL = " http://localhost:8080/users";
let cards = document.querySelector(".boxes");
let sort = document.querySelector(".sort");
let search = document.querySelector(".search");
let inputDescription = document.querySelector("#inputdescription");
let inputCaption = document.querySelector("#inputcaption");

const favUsers = JSON.parse(localStorage.getItem("fav-users")) || [];

let isEditing = false;
let editedId;

function cardBody(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
    <div class="col-sm-12 col-md-6 col-lg-3 mt-5 box">
              <div class="img-border">
                <img src="${element.photo}" alt="" />
              </div>
              <h4>${element.caption}</h4>
              <p>
              ${element.description}
              </p>
              <a href="#" class="btn btn-outline-danger text-secondary"
                >More Details</a
              >
              <span>
          <a href="#" onclick=favCard('${element.id}')><i class="fa-regular fa-heart"></i></a>

          <a href="form.html?id=${element.id}" onclick=editCard('${element.id}')><i class="fa-regular fa-pen-to-square"></i></a>

          <a href="#" onclick=deleteCard('${element.id}')><i class="fa-solid fa-trash-can"></i></a>
        </span>
            </div>`;
  });
}

async function getAllInfo() {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();
  cardBody(data);
}
getAllInfo();

function deleteCard(id) {
  axios.delete(`${API_URL}/${id}`);
  getAllInfo();
}

sort.addEventListener("click", function () {
  if (this.innerHTML == "Ascending") {
    axios(`${API_URL}`).then((res) => {
      let sortAsc = res.data.sort((a, b) => a.id - b.id);
      cardBody(sortAsc);
    });
    sort.innerHTML = "Descending";
  } else if (this.innerHTML == "Descending") {
    axios(API_URL).then((res) => {
      let sortDes = res.data.sort((a, b) => b.id - a.id);
      cardBody(sortDes);
    });
    this.innerHTML = "Default";
  } else {
    axios(API_URL).then((res) => {
      cardBody(res.data);
    });
    this.innerHTML = "Ascending";
  }
});

search.addEventListener("input", function (event) {
  axios(API_URL).then((res) => {
    let filtered = res.data.filter((item) =>
      item.caption
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase())
    );
    console.log(filtered);

    cardBody(filtered);
  });
});
