// CANVAS CODE
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 800;

let y = 50
let animatep = false
let pencilimg = document.getElementById("pencil");


requestAnimationFrame(animate);
function animate() {
    // UPDATE ELEMENTS ON CANVAS
    if (animatep === true) {
        y+= 3;
    } 

    if (y >= 710){
        y = 710
    }

    // DRAW CANVAS
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, cnv.width, cnv.height); // Background

    ctx.drawImage(pencilimg, 300, y, 100, 100)

    // REQUEST ANIMATION FRAME
    requestAnimationFrame(animate);
}

document.addEventListener("click", clickhandler)

function clickhandler() {
    animatep = true
}