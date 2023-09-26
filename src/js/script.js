//selectionne les div avec la class "slide-down"
const slideDownDiv = document.getElementsByClassName("slide-down");
let compteurDown = 0;

function SlideDown() {
    //scrolltop = position actuelle du scroll, clientheight = hauteur de la fenêtre
    const { scrollTop, clientHeight } = document.documentElement;
    console.log(scrollTop, clientHeight)
    // on parcour les éléments avec la class "slide-donw"
    for (const slideDown of slideDownDiv) {
        //distance entre le haut de la fenetre et la div avec la class "slide-down" 
        const topElementToTopViewport = slideDown.getBoundingClientRect().top;
        console.log(slideDown.getBoundingClientRect().top)
        console.log("scroll juqu'au prochain div :", topElementToTopViewport, "div n", compteurDown)

        if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {

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






