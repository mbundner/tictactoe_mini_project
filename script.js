//HTML elements
let resetButton = document.querySelector(".button")
let squares = document.querySelectorAll(".squares")
let board = document.querySelector(".board")
//console.log(resetButton)
//console.log(squares)
//console.log(board)

//Game status variables
let gameIsRunning = true
let xIsNext = true

//Event Handler Functions
function resetGame(e){
    e.preventDefault
    console.log(e)
}


//Event listeners
resetButton.addEventListener("click", resetGame)

for(let i=0; i<squares.length; i++){
    squares[i].addEventListener("click")
}