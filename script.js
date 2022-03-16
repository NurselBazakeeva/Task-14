const nav = document.querySelector(".nav");
const menuBurger = document.querySelector(".menuBurger");
const li = document.querySelectorAll("li");

menuBurger.addEventListener("click", () => {
    nav.classList.toggle('block');
})
