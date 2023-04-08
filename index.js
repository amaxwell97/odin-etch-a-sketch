
let mainDiv = document.getElementById('conatiner-div');

for (i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    mainDiv.appendChild(div);
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'blue';

        setTimeout(() => {
            e.target.style.backgroundColor = '';
        }, 1000);
    })
};

let btn = document.createElement('button');

document.querySelector('body').insertBefore(btn, mainDiv);

// btn.innerHTML('Click to update number of squares');

// function updateGrid(numberOfSquares) {
//     let numberOfSquares = prompt('Enter the number of squares per side (100 max):');
// };

btn.addEventListener('click', updateGrid());

// let div = document.createElement('div');
// div.classList.add('square');
// mainDiv.appendChild(div);
// console.log(div);

// let gridArray = Array(16).fill(div);
// console.log(gridArray);
// mainDiv.appendChild(gridArray[1]);
// mainDiv.appendChild(gridArray[2]);
// console.log(gridArray[1]);
