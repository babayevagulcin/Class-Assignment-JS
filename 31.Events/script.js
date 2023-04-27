let inputName = document.querySelector("#name");
let inputSurname = document.querySelector("#surname");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let inputCheck = document.querySelector("#check");
let labelCheckbox = document.querySelector("#checkbox");
let inputRadio = document.querySelectorAll("#radio");
let submitBtn = document.querySelector("#submit-btn");

submitBtn.disabled = "true";
inputCheck.style.accentColor = "brown";

inputName.addEventListener("focus", (event) => {
  event.target.style.background = "grey";
  event.target.style.color = "blanchedalmond";
//   if (inputName.value && inputSurname.value && inputCheck.checked) {
//     submitBtn.removeAttribute("disabled");
//   } else {
//     submitBtn.disabled = "true";
//   }
});

inputName.addEventListener("mouseout", (event) => {
  submitBtn.setAttribute("disabled", "true");
});
inputSurname.addEventListener("focus", (event) => {
  event.target.style.background = "green";
});
inputSurname.addEventListener("mouseover", (event) => {
  event.target.style.background = "green";
});
inputSurname.addEventListener("mouseout", (event) => {
  event.target.style.background = "transparent";
});
inputEmail.addEventListener("contextmenu", (event) => {
  event.target.style.background = "burlywood";
});
inputPassword.addEventListener("focus", (event) => {
  event.target.value = "123456789";
});
inputPassword.addEventListener("mouseout", (event) => {
  event.target.value = "";
});
inputCheck.addEventListener("click", function () {
  if (inputCheck.checked) {
    labelCheckbox.style.visibility = "visible";
  } else {
    labelCheckbox.style.visibility = "hidden";
  }
});

inputRadio.forEach((element) => {
    element.addEventListener("click", function () {
        element.style.accentColor = "midnightblue";
        alert("Thanks");
    });
});
inputRadio.required = required;