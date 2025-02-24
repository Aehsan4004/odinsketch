const gridContainer = document.getElementById("gridContainer");
const resizeButton = document.getElementById("resizeButton");

function createGrid(size) {
    gridContainer.innerHTML = ""; 
    let squareSize = 500 / size; 
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = "white";

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "skyblue";
        });

        square.addEventListener("mouseleave", () => {
            darkenSquare(square);
        });

        gridContainer.appendChild(square);
    }
}

function darkenSquare(square) {
    // Get the current darken level or start from 0
    let darkenLevel = square.getAttribute('data-darken') || 0;

    // Increase darken level by 10% (up to 100%)
    darkenLevel = Math.min(10, parseInt(darkenLevel) + 1);
    square.setAttribute('data-darken', darkenLevel);

    // Apply brightness filter based on darken level
    square.style.filter = `brightness(${100 - darkenLevel * 10}%)`;
}

/*
function darkenSquare(square) {
    let currentColor = square.style.backgroundColor;
    let rgbValues = currentColor.match(/d+/g);
    
    if (rgbValues) {
        let [r, g, b] = rgbValues.map(Number);
        r = Math.max(0, r - 25);
        g = Math.max(0, g - 25);
        b = Math.max(0, b - 25);
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}
*/
resizeButton.addEventListener("click", () => {
    let numb = parseInt(prompt("Enter a grid size (1-100):"));
    
    if (numb > 0 && numb <= 100) {
        createGrid(numb);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

createGrid(16);
