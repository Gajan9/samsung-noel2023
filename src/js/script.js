const { css } = require("@emotion/react")

/* console.log("hello");

setInterval("deplace()", 10);
nbImage = 4;
largeurImage = 640;
positionCourante = new Array(nbImage);

for (i = 0; i < nbImage; i++) {
    positionCourante [i] = i * largeurImage;
}

function deplace() {
    for (i=0; i < nbImage; i++) {
        positionCourante[i] -= 1;

        if (positionCourante[i] < -largeurImage) {
            positionCourante[i] = (nbImage - 1) * largeurImage;
        }
        document.getElementById("image" + (i+1)).style.left = positionCourante[i] + "px";
    }
} */

/* const slideDown = document.getElementsByClassName("slide-down");
console.log(slideDown);

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToTopViewport = slideDown.getBoundingClientRect().top;
    console.log(topElementToTopViewport);
    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        slideDown.classList.add('active');
    }
});
 */

const slideDownDiv = document.getElementsByClassName("slide-down");
let compteur = 0;

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;

    for (const slideDown of slideDownDiv) {
        const topElementToTopViewport = slideDown.getBoundingClientRect().top;
        if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
            if (!slideDown.classList.contains('active')) {
                slideDown.classList.add('active');
                compteur++; 
            }
        }
    }
});





/* const slideUp = document.querySelector('.slide-up');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;
    
    const topElementToTopViewport = slideUp.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        slideUp.classList.add('active')
    }
}); */