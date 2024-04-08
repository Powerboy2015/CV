const navBut = document.querySelector("#navBut");
const main = document.querySelector("main");
const nav = document.querySelector("nav");

function toggleNav() {
    nav.classList.toggle('openNav');
}

navBut.addEventListener('click',() => {
    nav.classList.toggle('openNav');
});