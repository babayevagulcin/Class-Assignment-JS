const section = document.createElement("section");
const form = document.createElement("form");
const nameLabel = document.createElement("label");
const surnameLabel = document.createElement("label");
const nameInput = document.createElement("input");
const surnameInput = document.createElement("input");
const check = document.createElement("input");
const radio = document.createElement("input");
const radio1 = document.createElement("input");
const startBtn = document.createElement("button");
const submitBtn = document.createElement("button");
const nextBtn = document.createElement("button");
const p = document.createElement("p");
let timeValue = 15;

document.body.append(startBtn);
document.body.append(p);
document.body.append(section);
document.body.append(nextBtn);
section.append(form);
form.append(nameLabel);
form.append(nameInput);
form.append(surnameLabel);
form.append(surnameInput);
form.append(check);
form.append(radio);
form.append(radio1);
form.append(submitBtn);

nameLabel.innerHTML = "<strong>Name</strong>";
surnameLabel.innerHTML = "<strong>Surname</strong>";
p.innerHTML = `00:${timeValue}`;
submitBtn.append("Submit");
startBtn.append("Let's start...");
nextBtn.append("Next Page>");

section.style.height = "100vh";
section.style.display = "flex";
section.style.alignItems = "center";
section.style.justifyContent = "center";
section.style.border = "1px dashed #000";

form.style.display = "flex";
form.style.flexDirection = "column";
form.style.alignItems = "center";
form.style.justifyContent = "center";
form.style.gap = "15px";

p.style.border = "1px solid #000";
p.style.width = "40px";

check.setAttribute("type", "checkbox");
radio.setAttribute("type", "radio");
radio1.setAttribute("type", "radio");

nameInput.required = true;
surnameInput.required = true;
check.required = true;
submitBtn.disabled = true;
nextBtn.disabled = true;



check.addEventListener("click", function () {
  check.style.accentColor = "red";
});
radio.addEventListener("click", function () {
  radio.style.accentColor = "blue";
});
radio1.addEventListener("click", function () {
  radio1.style.accentColor = "blue";
});

startBtn.addEventListener("click", function () {
  let interval;
  this.setAttribute("disabled", "true");
  interval = setInterval(() => {
    submitBtn.disabled = false;
    timeValue -= 1;
    p.innerText = `00:${timeValue}`;
    if (timeValue > 10) {
      p.style.color = "blue";
      p.style.borderBlockColor = " blue";
    }
    if (timeValue <= 10) {
      p.style.color = "red";
      p.style.borderColor = " red";
    }
    if (timeValue == 0) {
      clearInterval(interval);
      p.innerHTML = "You missed):";
      p.style.width = "100px";
    }
  }, 1000);
});

submitBtn.addEventListener("click", function () {
  nextBtn.disabled = false;
});
nextBtn.addEventListener("click", function () {
  alert("Finished");
});
