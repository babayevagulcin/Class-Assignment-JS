const boxes = document.querySelector(".boxes");
const users = JSON.parse(localStorage.getItem("users")) || [];

console.log('users',users);
  users.forEach((element) => {
    const box = document.createElement("div");
      boxes.append(box);
    box.innerHTML = `
    <h1>User</h1>
        <p>name:${element.username}</p>
        <p>email:${element.email}</p>
        <button type="button" class="btn btn-danger">Delete</button>
    `;
  });

function remove(id) {
  users = users.filter((el) => el.id != id);
  localStorage.setItem("users", JSON.stringify(users));
  userCreat();
}
