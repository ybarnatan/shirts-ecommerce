/* Abro el navbar si esta cerrado cuando se clickea el hamburger menu.
Pero ya si esta abierto, debo cerrarlo*/ 

/*Apertura*/ 
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {     /*Esta es una arrow function*/
        nav.classList.add('active');          /*si clickeo #bar, al #nav le agrego una clase llamada active*/ 
    })
}


/*Cierre*/ 
const close= document.getElementById('close');

if (close) {
    close.addEventListener('click', () => {    
        nav.classList.remove('active');       
    })
}



/*Hide navbar inside header  when scrolling down the page*/ 

const myNav = document.getElementById('header');
let lastScrollY = window.scrollY;  /*Devuelve la posicion del scroll bar en px*/

window.addEventListener('scroll', () => {

    if (lastScrollY < window.scrollY) {
        myNav.classList.add("nav--hidden");
    } else {
        myNav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY /*actualizo la posicion del scroll*/

    });

