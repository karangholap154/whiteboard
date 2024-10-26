const childs = document.querySelectorAll(".child");
const colorInput = document.getElementById("color-input");
const drawButton = document.getElementById("draw-button");
const eraseButton = document.getElementById("erase-button");
const clearButton = document.getElementById("clear-button");

let color = "#000000"; 
let drawing = false;
let erasing = false;

colorInput.addEventListener("change", () => {
    color = colorInput.value; 
});

drawButton.addEventListener("click", () => {
    drawing = true;
    erasing = false;
});

eraseButton.addEventListener("click", () => {
    drawing = false;
    erasing = true;
});

clearButton.addEventListener("click", () => {
    childs.forEach((child) => {
        child.style.backgroundColor = ""; 
    });
});


childs.forEach((child) => {
    child.addEventListener("mousedown", (e) => {
        if (drawing) {
            child.style.backgroundColor = color; 
        } else if (erasing) {
            child.style.backgroundColor = "";
        }
    });

    child.addEventListener("mouseenter", (e) => {
        if (e.buttons > 0) { 
            if (drawing) {
                child.style.backgroundColor = color; 
            } else if (erasing) {
                child.style.backgroundColor = ""; 
            }
        }
    });
});