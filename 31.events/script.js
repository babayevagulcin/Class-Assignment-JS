let inputName = document.querySelector("#name");
let inputSurame = document.querySelector("#surname");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let labelCheck = document.querySelector("#check");
let labelCheckbox = document.querySelector("#checkbox");
let inputRadio = document.querySelectorAll("#radio");
let submitBtn = document.querySelector("#submit-btn");
submitBtn.setAttribute("disabled", "false");

labelCheck.style.accentColor = "brown";

inputName.addEventListener("focus", (event) => {
  event.target.style.background = "grey";
  event.target.style.color = "blanchedalmond";
 if (inputName.checked && inputSurame.checked && submitBtn.checked) {
   submitBtn.setAttribute("disabled", "true");
 }
});
inputName.addEventListener("mouseout", (event) => {
  if (inputName.checked && inputSurame.checked && submitBtn.checked) {
    submitBtn.setAttribute("disabled", "true");
  }
});
inputSurame.addEventListener("focus", (event) => {
  event.target.style.background = "green";
});
inputSurame.addEventListener("mouseover", (event) => {
  event.target.style.background = "green";
});
inputSurame.addEventListener("mouseout", (event) => {
  event.target.style.background = "transparent";
});
inputEmail.addEventListener("contextmenu", (event) => {
  event.target.style.background = "burlywood";
});
inputPassword.addEventListener("focus", (event) => {
  event.target.value = "1233";
});
inputPassword.addEventListener("mouseout", (event) => {
  event.target.value = "";
});
labelCheck.addEventListener("click", function () {
  if (inputName.checked && inputSurame.checked && submitBtn.checked) {
    submitBtn.setAttribute("disabled", "true");
  }
  if (labelCheck.checked) {
    labelCheckbox.style.visibility = "visible";
  } else {
    labelCheckbox.style.visibility = "hidden";
  }
});
