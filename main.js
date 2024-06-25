const navbar = document.querySelector("navbar");
const opnNavBtn = navbar.querySelector(".opn-nav-btn");
const clsNavBtn = navbar.querySelector(".cls-nav-btn");
const navLinks = navbar.querySelector(".navLinks");

opnNavBtn.addEventListener("click", () => {
    navLinks.style.right = 0 + "%";
});
clsNavBtn.addEventListener("click", () => {
    navLinks.style.right = -100 + "%";
});
