const form = document.querySelector("#form");
const inputUserName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const checkbox = document.querySelector("#check");
const submitBtn = document.querySelector(".btn-primary");

const users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", (item) => {
  item.preventDefault();
  const user = {
    id: Date.now(),
    username: inputUserName.value,
    email: inputEmail.value,
    password: inputPassword.value,
    check: checkbox.checked,
  };
  if (user.username && user.email && user.password && user.check) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = " http://127.0.0.1:5500/users.html";
  }
});

function checkInput() {
  if (
    inputUserName.value &&
    inputEmail.value &&
    inputPassword.value &&
    checkbox.checked
  ) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "");
  }
}

inputUserName.addEventListener("input", () => {
  checkInput();
});
inputEmail.addEventListener("input", () => {
  checkInput();
});
inputPassword.addEventListener("input", () => {
  checkInput();
});
checkbox.addEventListener("input", () => {
  checkInput();
});

check.addEventListener("click", function () {
  check.style.accentColor = "brown";
});
