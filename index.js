
// Set mainDiv variable to conatiner

let mainDiv = document.getElementById('conatiner-div');

// Create button, insert it before the container-div, and add text

let btn = document.createElement('button');

document.querySelector('body').insertBefore(btn, mainDiv);

btn.textContent = 'Click to update number of squares';

// Create initial 16 by 16 Etch-A-Sketch grid

for (i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('square');

    let square = document.styleSheets[0].cssRules[0].style;
    let squaresWidth = (720 / 16) - 2;

    square.border = '.1px solid black';
    square.setProperty('width', `${squaresWidth}px`);
    square.setProperty('height', `${squaresWidth}px`);

    mainDiv.appendChild(div);
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'blue';

        setTimeout(() => {
            e.target.style.backgroundColor = '';
        }, 1000);
    })
};

btn.addEventListener('click', (e) => {
    let numberOfSquares = prompt('Enter the number of squares per side (100 max):');

    if (isNaN(numberOfSquares)) {
        alert('You did not enter a number. Try again.');
    } else {
        numberOfSquares = parseInt(numberOfSquares);
    }
    
    if (Number.isInteger(numberOfSquares) == 'false')  {
        alert('You did not enter a whole number. Try again.');
    } else if ((numberOfSquares > 100) || (numberOfSquares < 2)) {
        alert('You entered a number more than 100 or less than 2. Try again.');
    } else {
        mainDiv.innerHTML = '';
        console.log(numberOfSquares);
        createNewGrid(numberOfSquares);
    };
});

function createNewGrid(squares) {
    for (i = 0; i < (Math.pow(squares, 2)); i++) {
        let div = document.createElement('div');
        div.classList.add('square');

        let square = document.styleSheets[0].cssRules[0].style;
        let squaresWidth = (720 / squares) - 2;

        square.border = '.1px solid black';
        square.setProperty('width', `${squaresWidth}px`);
        square.setProperty('height', `${squaresWidth}px`);

        mainDiv.appendChild(div);
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'blue';

            setTimeout(() => {
                e.target.style.backgroundColor = '';
            }, 1000);
        })
    };
}

// let div = document.createElement('div');
// div.classList.add('square');
// mainDiv.appendChild(div);
// console.log(div);

// let gridArray = Array(16).fill(div);
// console.log(gridArray);
// mainDiv.appendChild(gridArray[1]);
// mainDiv.appendChild(gridArray[2]);
// console.log(gridArray[1]);
