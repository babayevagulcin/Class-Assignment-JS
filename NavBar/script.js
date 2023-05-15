let menuIcon = document.querySelector("#menu");
let navbar = document.querySelector(".nav-input");

menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("show");
});

// let menuIcon = document.querySelector("#menu-bar");
// let mobileNav = document.querySelector("nav");

// menuIcon.addEventListener("click", function () {
//   mobileNav.classList.toggle("show");
//   this.classList.contains("fa-bars")
//     ? (this.classList = "fa-solid fa-xmark")
//     : (this.classList = "fa-solid fa-bars");
// });