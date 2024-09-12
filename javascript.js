/* create initial 16x16 grid */
const squareContainer = document.querySelector(".squareContainer");
squareContainer.style.cssText = "display: flex; flex-wrap: wrap; border: 1px solid black; width: 480px;";

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.cssText = "height: 30px; flex: 0 0 30px; border: 1px solid black; box-sizing: border-box;";
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
    squareContainer.appendChild(square);
};


