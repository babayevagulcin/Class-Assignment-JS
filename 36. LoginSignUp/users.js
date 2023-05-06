const boxes = document.querySelector(".boxes");
const addBtn = document.querySelector("#add-btn");
const users = JSON.parse(localStorage.getItem("users")) || [];

addBtn.addEventListener('click', () => {
  window.location.href = 'index.html'
})

console.log('users',users);
  users.forEach((element) => {
    const box = document.createElement("div");
    box.classList.add("box")
      boxes.append(box);
    box.innerHTML = `
    <h1 style="text">User</h1>
        <p>name:${element.username}</p>
        <p>email:${element.email}</p>
        <button type="button" class="btn btn-danger">Delete</button>
    `;
  });

function removeUser(id) {
  users = users.filter((el) => el.id != id);
  localStorage.setItem("users", JSON.stringify(users));
  userCreat();
}