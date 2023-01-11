function createDivs(n) {
    for (i = 0; i < n; i++ ) {
        const row = document.createElement('div');
        row.classList.add('squaresRow');

        for (j = 0; j < n; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('data-brightness', 90); // avoid 90% brightness colors
            square.addEventListener('mouseenter', hoverHandler);

            row.appendChild(square);
        }

        squaresContainer.appendChild(row);
    }
}

function resetButtonHandler() {
    // delete divs
    while (squaresContainer.hasChildNodes()) {
        squaresContainer.removeChild(squaresContainer.firstElementChild);
    }

    createDivs(getSize());
}

function getSize() {
    let size = Number(prompt("Enter size of canvas:"));

    if (isNaN(size) || !(size | 0) || (size <= 0)) {
        alert("Invalid size. Please enter a positive integer.");
        size = getSize();   
    } else if (size > 100) {
        alert("Size too large. Setting to max size of 100x100.");
        size = 100;
    }

    return size;
}

function hoverHandler(e) {
    const lastBrightness = Number(e.target.getAttribute('data-brightness'));
    const newBrightness = decideBrightness(lastBrightness);
    e.target.setAttribute('data-brightness', newBrightness);
    e.target.style.backgroundColor = getColor(newBrightness);
}

function getColor(brightness) {
    hue = Math.random(); // generate random hue in turns
    return `hsl(${hue}turn 100% ${brightness}%)`;
}

function decideBrightness(lastBrightness) {
    if (lastBrightness > 30) {
        return lastBrightness - 10;
    } else {
        return 30;
    }
}

const squaresContainer = document.querySelector("#squaresContainer");
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener('click', resetButtonHandler);

createDivs(16);