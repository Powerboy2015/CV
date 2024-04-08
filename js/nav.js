const navBut = document.querySelector('button');
const main = document.querySelector("main");
const nav = document.querySelector("nav");



navBut.addEventListener('click',() => {
    nav.classList.toggle('openNav');
});