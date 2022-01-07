const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const close = document.querySelector(".close")
menu.addEventListener("click", () => {
    navLinks.classList.toggle("open")
})
close.addEventListener("click", () => {
    navLinks.classList.remove("open")
})

// second nav

const secondMenu = document.querySelector(".menu-2");
const secondLinkMenu = document.querySelector(".nav-menu-2");
const closeTwo = document.querySelector(".close-2");

secondMenu.addEventListener("click", () => {
    secondLinkMenu.classList.toggle("open")
})

closeTwo.addEventListener("click", () => {
    secondLinkMenu.classList.remove("open")
})