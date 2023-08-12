const menu = document.querySelector("#menu");
const burger = document.querySelector('#menu-icon');
const header = document.querySelector('header');


 
burger.onclick = () => {
    menu.classList.toggle('active');
    burger.classList.toggle('bx-x');
}
window.onscroll = () => {
    menu.classList.remove('active');
    burger.classList.remove('bx-x');
}

