const API_URL = "https://northwind.vercel.app/api/orders";
let cards = document.querySelector("#cards");
let addBtn = document.querySelector(".btn-dark");

async function getAllInfo() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    cards.innerHTML = " ";
    data.forEach((item) => {
      const card = document.createElement("div");
      const div = document.createElement("div");
      const iconEdit = document.createElement("i");
      const iconRemove = document.createElement("i");

      // div.classList.add("m-2");
      card.classList.add("card", "col-5");
      iconEdit.classList.add("fa-solid", "fa-pen");
      iconRemove.classList.add("fa-solid", "fa-trash-can");

      card.innerHTML = `
    <div>
        <h4>${item.shipAddress?.city}</h4>
        <span>${item.shipAddress?.country}</span>
    </div>
    `;
      card.append(div);
      div.append(iconEdit, iconRemove);
      cards.append(card);
    });
  } catch (error) {
    console.log(error);
  }
}
getAllInfo();

// addBtn.addEventListener("click", function () {});
