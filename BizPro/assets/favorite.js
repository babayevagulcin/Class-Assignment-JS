const API_URL = "http://localhost:8080/users";
let cards = document.querySelector(".fav-boxes");


function cardBody(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
    <div class="col-sm-12 col-md-6 col-lg-3 fav-box">
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
            </div>
            `;
  });
}

