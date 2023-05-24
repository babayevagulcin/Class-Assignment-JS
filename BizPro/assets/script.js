const API_URL = "http://localhost:8080/users";
let cards = document.querySelector(".boxes");

function cardBody(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
    <div class="col-sm-12 col-md-6 col-lg-3 box">
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
          <a href="#"  onclick=favCard('${element.id}')><i class="fa-regular fa-heart"></i></a>
          <a href="#"  onclick=editChild('${element.id}')><i class="fa-regular fa-pen-to-square"></i></a>
          <a href="#"  onclick=deleteCard('${element.id}')><i class="fa-solid fa-trash-can"></i></a>
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

async function deleteCard(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  getAllInfo();
}
