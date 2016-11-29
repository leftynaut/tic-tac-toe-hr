const readlineSync = require('readline-sync')
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let gameFinished = false

const insertMove = function insertMove(move, char) {
  board[move - 1] = char
  printBoard()
}

const printBoard = function printBoard() {
console.log(`\n ${board[0]} | ${board[1]} | ${board[2]}
-----------
 ${board[3]} | ${board[4]} | ${board[5]}
-----------
 ${board[6]} | ${board[7]} | ${board[8]}`)
}

let moveCount = 1
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
  moveCount++
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
