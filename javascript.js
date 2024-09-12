const body = document.querySelector("body");


function createDisplay() {
    const squareContainer = document.createElement("div");
    squareContainer.classList.add("squareContainer");
    const screenHeightWidth = 480;
    squareContainer.style.cssText = `display: flex; flex-wrap: wrap; border: 2px solid black; width: ${screenHeightWidth}px;`;
    body.appendChild(squareContainer);
    return squareContainer
};



function createGrid(squareContainer, squaresPerRow=16) {

    while (squareContainer.firstChild) {
        squareContainer.removeChild(squareContainer.firstChild);
    };

    let styles = window.getComputedStyle(squareContainer);
    let screenHeightWidth = parseInt(styles.getPropertyValue("width"));
    for (let i = 0; i < squaresPerRow**2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.cssText = `height: ${screenHeightWidth/squaresPerRow}px; flex: 0 0 ${screenHeightWidth/squaresPerRow}px;`;
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
        squareContainer.appendChild(square);
    };
};


const display = createDisplay()
createGrid(display);


const inputButton = document.createElement("button");
inputButton.textContent = "Click me to choose the squares per row";
body.prepend(inputButton);
inputButton.addEventListener("click", () => {
    let input = 0;
    while ((input % 1 != 0) || (input == 0) || (input > 100)) {
        input = parseFloat(prompt());

    };
    createGrid(display, input);
});




