import { BASE_URL } from "./api.js";

function getAllInfo(item) {
  fetch(`${BASE_URL}`)
    .then((result) => result.json())
    .then((data) => {
      let tBody = document.querySelector("tbody");

      function tableBody(data) {
        data.forEach((item) => {
          let tr = document.createElement("tr");
          tr.innerHTML = `
    <td>${item.id}</td>
    <td>${item.companyName} </td>
    <td>${item.address.city}</td>
    <td>${item.address.country}</td>
    <td>${item.address.phone}</td>
    <td><button id="${item.id}" onclick=deleteInfo(${item.id})) >Delete</button></td>
    `;
          tBody.append(tr);
        });
      }
      tableBody(data);
    });
}
getAllInfo();
function deleteInfo(id) {
  console.log(id);
  fetch(`${BASE_URL} /${id}`, {
    method: "DELETE",
  });

  document.querySelector(`#${id}`).parentElement.remove();
}
deleteInfo();
