//selectionne les div avec la class "slide-down"
const slideDownDiv = document.getElementsByClassName("slide-down");
let compteurDown = 0;

function SlideDown() {
    //scrolltop = position actuelle du scroll, clientheight = hauteur de la fenêtre
    const { scrollTop, clientHeight } = document.documentElement;
    // on parcours les éléments avec la class "slide-donw"
    for (const slideDown of slideDownDiv) {
        //distance entre le haut de la fenetre et la div avec la class "slide-down" 
        const topElementToTopViewport = slideDown.getBoundingClientRect().top;

        if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.7) {

            //si ma div n'a pas la classe "active" alors je l'ajoute 
            if (!slideDown.classList.contains('active')) {
                slideDown.classList.add('active');
                compteurDown++; 
            }
        }
    }
}


const slideUpDiv = document.getElementsByClassName("slide-up");
let compteurUp = 0;

function SlideUp() {
    const { scrollTop, clientHeight } = document.documentElement;

    for (const slideUp of slideUpDiv) {
        const topElementToTopViewport = slideUp.getBoundingClientRect().top;
        if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
            if (!slideUp.classList.contains('active')) {
                slideUp.classList.add('active');
                compteurUp++; 
            }
        }
    }
}

//réagit lorsqu'on scroll
window.addEventListener('scroll', SlideDown);
window.addEventListener('scroll', SlideUp);



// Menu Hamburger 
const menuBurger = document.querySelector(".menu-burger");
const navBar = document.querySelector(".menu");

menuBurger.addEventListener('click', () => {
    navBar.classList.toggle('mobile-menu');
    console.log("menuHamburger");
})



