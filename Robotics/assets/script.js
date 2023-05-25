const API_URL = "https://northwind.vercel.app/api/categories";
let cards = document.querySelector(".products-cards");

async function getAllInfo() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    cards.innerHTML = " ";
    data.forEach((item) => {
      cards.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-3 mt-5 products-card">
                <img src="./assets/img/p1.png" alt="" />
                <h5>${item.name}</h5>
                <p> ${item.description}</p>
                <a href="#" class="btn view">View Details</a>
                 <span>
                <a href="#"  onclick=favCard('${element.id}')><i class="fa-regular fa-heart"></i></a>
                <a href="#"  onclick=editChild('${element.id}')><i class="fa-regular fa-pen-to-square"></i></a>
                <a href="#"  onclick=deleteCard('${element.id}')><i class="fa-solid fa-trash-can"></i></a>
            </span>
        </div>
           
    `;
    });
  } catch (error) {
    console.log(error);
  }
}
getAllInfo();
