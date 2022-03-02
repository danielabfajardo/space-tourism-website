const btnHamburgerOpen = document.querySelector("#btnHamburger__open");
const btnHamburgerClose = document.querySelector("#btnHamburger__close");
const header = document.querySelector(".header");
//const body = document.querySelector(".body");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburgerOpen.addEventListener('click', function() {
    fadeElems.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    }); 
    header.classList.add('open');
    //header.classList.add('noscroll');
});

btnHamburgerClose.addEventListener('click', function() {
    fadeElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });
    //header.classList.remove('open');
    //header.classList.remove('noscroll');
});