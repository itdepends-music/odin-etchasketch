const squaresContainer = document.querySelector("#squaresContainer");

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

function hoverHandler(e) {
    e.target.style.backgroundColor = 'White';
}

createDivs(16);