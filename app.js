const readlineSync = require('readline-sync')
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let gameFinished = false
let moveCount = 1

const insertMove = function insertMove(move, char) {
  if (board[move - 1] === 'X' || board[move - 1] === 'O'){
    console.log(`\nDon't be stupid, someone already played that square`)
    moveCount--
    askForMove()
  }
  if (move < 0 || move > 9) {
    console.log(`\nThat square doesn't exist, knock it off`)
    moveCount--
    askForMove()
  }
  board[move - 1] = char
  moveCount++
  printBoard()
}

const printBoard = function printBoard() {
console.log(`\n ${board[0]} | ${board[1]} | ${board[2]}
-----------
 ${board[3]} | ${board[4]} | ${board[5]}
-----------
 ${board[6]} | ${board[7]} | ${board[8]}`)
 checkForWinner()
}

const checkForWinner = function checkForWinner(){
  let name
  if (moveCount % 2 === 0) {
    name = playerTwo
    char = 'O'
  } else {
    name = playerOne
    char = 'X'
  }
  const checkInnerWinner = function checkInnerWinner(char, name){
    if (board[0] === char && board[1] === char && board[2] === char ||
      board[3] === char && board[4] === char && board[5] === char ||
      board[6] === char && board[7] === char && board[8] === char ||
      board[0] === char && board[3] === char && board[6] === char ||
      board[1] === char && board[4] === char && board[7] === char ||
      board[2] === char && board[5] === char && board[8] === char ||
      board[0] === char && board[4] === char && board[8] === char ||
      board[2] === char && board[4] === char && board[6] === char) {
        gameFinished = true
        console.log(`\nLooks like ${char} is the winner! Play again?`)
      }
  }
  checkInnerWinner(char, name)
  if (moveCount === 9){
    gameFinished = true
    console.log(`\nLooks like it's a cat's game. Play again?`)
  }
}

const askForMove = function askForMove() {
  let name, char, move
  if (moveCount % 2 === 0) {
    name = playerTwo
    char = 'O'
  } else {
    name = playerOne
    char = 'X'
  }
  move = readlineSync.question(`\n${name}, where would you like to place an ${char}? `)
  insertMove(move, char)
}

const playerOne = readlineSync.question('What is your name, Player 1? ');
const playerTwo = readlineSync.question('And what is your name, Player 2? ');
console.log('The board is shown below:')
printBoard()
console.log('\nEach turn, you will pick a number that corresponds to your move')
while (!gameFinished){
  askForMove()
}
