
let mainDiv = document.getElementById('conatiner-div');

for (i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    mainDiv.appendChild(div);
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

// function createDivs(numberOfDivs) {

//     for (i = 0; i < numberOfDivs; i++) {
        

//         gridArray.push('div')
//     }
// }

// function appendDivs() {
//     createDivs(16);


// }
