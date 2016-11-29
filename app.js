const readlineSync = require('readline-sync')
let gameBoard = [[null, null, null], [null, null, null], [null, null, null]]

let playerOne = readlineSync.question('What is your name, Player 1?');
let playerTwo = readlineSync.question('And what is your name, Player 2?');
