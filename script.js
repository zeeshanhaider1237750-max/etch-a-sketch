
const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
     const square = document.createElement('div');
     square.classList.add('square');
     container.appendChild(square);
    //  square.addEventListener('mouseenter', () => {
    //     square.style.backgroundColor = 'black';
    //  })
}
let newGrid;
const numberbtn = document.querySelector('#btn');
numberbtn.addEventListener('click', () => {
     newGrid = Number(prompt('enter the new grid number per side that is smaller than or equal to 100 or an error will occur.'))

if (newGrid >0 && newGrid <= 100){
    container.innerHTML = '';
    container.style.setProperty('--grid-size', newGrid);
    for (let i = 0; i < newGrid*newGrid; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}
})