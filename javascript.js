const container = document.querySelector('.container');
const createButton = document.querySelector('.create');
const clearButton = document.querySelector('.clear');

function createGrid(numberOfSquaresPerRow) {
    clearGrid()
    for (let i = 0; i < (800**2 / ((800 / numberOfSquaresPerRow) **2)); i++) {
        const square = document.createElement('div');
        square.style.cssText = `height: ${800 / numberOfSquaresPerRow}px; width: ${800 / numberOfSquaresPerRow}px; border: 1px solid black;`;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    
        container.appendChild(square);
    }
}

function clearGrid() {
    while (document.querySelector('.container div')) {
        container.firstChild.remove();
    }
}

createButton.addEventListener('click', () => {
    let numberOfSquaresPerRow = prompt('Squares per row:')
    createGrid(numberOfSquaresPerRow);
});

clearButton.addEventListener('click', clearGrid);

