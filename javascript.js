function createDivs(n) {
    for (i = 0; i < n; i++ ) {
        const row = document.createElement('div');
        row.classList.add('squaresRow');

        for (j = 0; j < n; j++) {
            const square = document.createElement('div');
            square.classList.add('square');

            square.addEventListener('mouseenter', hoverHandler);

            row.appendChild(square);
        }

        squaresContainer.appendChild(row);
    }
}

function resetButtonHandler() {
    while (squaresContainer.hasChildNodes()) {
        squaresContainer.removeChild(squaresContainer.firstElementChild);
    }

    createDivs(16);
}

function hoverHandler(e) {
    e.target.style.backgroundColor = 'White';
}

const squaresContainer = document.querySelector("#squaresContainer");
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener('click', resetButtonHandler);

createDivs(16);