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

//Regular functions
function handleWin(letter){
    gameIsRunning = true
}






function gameStatus(){
    let one = squares[0].classList[2]
    let two = squares[1].classList[2]
    let three = squares[2].classList[2]
    let four = squares[3].classList[2]
    let five= squares[4].classList[2]
    let six = squares[5].classList[2]
    let seven = squares[6].classList[2]
    let eight = squares[7].classList[2]
    let nine = squares[8].classList[2]
    
    //check for winner
    if(one && one===two && one===three){
        gameIsRunning = false

    }
}






//Event Handler Functions
function resetGame(e){
    e.preventDefault()

}
function squareChoice(e){
    e.preventDefault()
    let specificSquare = e.target.classList[1]
    let classList = e.target.classList
    //console.log(specificSquare)
    //console.log(classList)
    
    if (classList[2] === "X" || classList[2] === "O"){
        return;
    }
    
    if (xIsUp){
        classList.add("X")
        gameStatus()
        xIsUp = !xIsUp
    }else{
        classList.add("O")
        gameStatus()
        xIsUp = !xIsUp
    }

}





//Event listeners
resetButton.addEventListener("click", resetGame)

for(let i=0; i<squares.length; i++){
    //console.log(squares[i])
    squares[i].addEventListener("click", squareChoice)
}