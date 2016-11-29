const readlineSync = require('readline-sync')
let board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const playerOne = readlineSync.question('What is your name, Player 1? ');
const playerTwo = readlineSync.question('And what is your name, Player 2? ');
console.log('The board is shown below:')
console.log(`\n ${board[0][0]} | ${board[0][1]} | ${board[0][2]}
-----------
 ${board[1][0]} | ${board[1][1]} | ${board[1][2]}
-----------
 ${board[2][0]} | ${board[2][1]} | ${board[2][2]}`)
console.log('\nEach turn, you will pick a number that corresponds to your move')
let move;
move = readlineSync.question(`\n${playerOne}, where would you like to place an X? `)
