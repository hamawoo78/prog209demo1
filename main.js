    
let btn = document.getElementById("btn");
let box = document.getElementById("box");
let colorRed = 255;    // initialize the red channel to pure red

btn.addEventListener("click", clickHandler, false);
    
function clickHandler() {
    // first color channel (red) gets darker every time button is clicked
    box.style.backgroundColor = "rgb(" + (colorRed-=10) + ", 0, 0)";

    // ES6 equivalent using template string
    //box.style.backgroundColor = `rgb( ${colorRed-=10}, 0, 0 )`;	
}	