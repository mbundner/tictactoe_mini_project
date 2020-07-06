//HTML elements
let resetButton = document.querySelector(".button")
let squares = document.querySelectorAll(".squares")
let board = document.querySelector(".board")
//console.log(resetButton)
//console.log(squares)
//console.log(board)

//Game status variables
let gameIsRunning = true
let xIsUp = true

//Event Handler Functions
function resetGame(e){
    e.preventDefault()

}
function squareChoice(e){
    e.preventDefault()
    let specificSquare = e.target.classList[1]
    let classList = e.target.classList
    console.log(specificSquare)
    console.log(classList)
    
    if (classList[2] === "X" || classList[2] === "O"){
        return;
    }
    
    if (xIsUp){
        classList.add("X")
        xIsUp === false
    }else{
        classList.add("O")
        xIsUp === false
    }

}





//Event listeners
resetButton.addEventListener("click", resetGame)

for(let i=0; i<squares.length; i++){
    //console.log(squares[i])
    squares[i].addEventListener("click", squareChoice)
}