document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    });
});

function handleClick(event) {
    let square = event.target;

    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert("O jogo Acabou!");
        }, 50);
    }
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());

    let symbol = board[position];

    square.innerHTML = `<div class="${symbol}"></div>`;
}

// //utilizar essa função pra resetar o game
// function uptadeSquares() {
//     let squares = document.querySelectorAll(".square");

//     squares.forEach((square) => {
//         let position = square.id;
//         let symbol = board[position];

//         if (symbol != "") {
//             square.innerHTML = `<div class="${symbol}"></div>`;
//         }
//     });
// }
