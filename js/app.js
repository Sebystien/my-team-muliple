'use strict';

const btnBurger = document.querySelector('.c-btn__burger');

function showMenu(){
    const menuBg = document.querySelector('.menu-bg');
    const menu = document.querySelector('.menu');
    menu.classList.toggle("show");
    menuBg.classList.toggle('show-bg');
    console.log('test est')
}

function btn(e){
    e.preventDefault();
    const btnBurgerIcons = document.querySelector('.c-btn__burger-icons');
    btnBurgerIcons.classList.toggle("toggled");
    console.log('testing');

    showMenu();
}

btnBurger.addEventListener('click',btn );