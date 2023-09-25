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

