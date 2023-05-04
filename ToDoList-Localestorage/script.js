let ul = document.querySelector(".list");
let inputText = document.querySelector("#input-text");
let addBtn = document.querySelector(".btn-primary");

let listGroup = JSON.parse(localStorage.getItem("listGroupp")) || [];

addBtn.addEventListener("click", function () {
  if (inputText.value) {
    let obj = {
      id: Date.now(),
      todoText: inputText.value,
    };

    listGroup.push(obj);
    localStorage.setItem("listGroupp", JSON.stringify(listGroup));
  }
});

function createTodo() {
  ul.innerHTML = "";
  listGroup.forEach((element) => {
    ul.innerHTML += `
    <li class="list-group-item list-group-item-info d-flex justify-content-between align-items-center mb-2 rounded">
        <div class="chek-input">
            <input id="ckeck" type="checkbox">
            <span>${element.todoText}</span>
        </div>  
        <div>
            <button type="button" class="btn btn-success">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
        </div>
    </li>
    `;
  });
}
createTodo();
