'use strict';

const btnBurger = document.querySelector('.c-btn__burger');

function showMenu(){
    const menuBg = document.querySelector('.menu-bg');
    const menu = document.querySelector('.menu');
}

function btn(e){
    e.preventDefault();
    const btnBurgerIcons = document.querySelector('.c-btn__burger-icons');
    btnBurgerIcons.classList.toggle("toggled");
    console.log('testing');
}

btnBurger.addEventListener('click',btn );