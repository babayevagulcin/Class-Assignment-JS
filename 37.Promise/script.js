import { BASE_URL } from "./api.js";

function deleteInfo(id) {
  console.log(id);
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  getAllInfo();
}
deleteInfo();

function getAllInfo() {
  fetch(`${BASE_URL}`)
    .then((result) => result.json())
    .then((data) => {
      let tBody = document.querySelector("tbody");
      function tableBody(data) {
        tBody.innerHTML = "";
        data.forEach((item) => {
          let tr = document.createElement("tr");
          tr.innerHTML = `
    <td>${item.id}</td>
    <td>${item.companyName} </td>
    <td>${item.address?.city}</td>
    <td>${item.address?.country}</td>
    <td>${item.address?.phone}</td>
    <td><button>Delete</button></td>
    `;
          tBody.append(tr);
        });
      }
      tableBody(data);
    });
}
getAllInfo();
