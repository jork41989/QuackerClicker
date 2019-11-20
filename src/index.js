const Board = require('./board')
var firebase = require("firebase");

document.addEventListener("DOMContentLoaded", function () {
  const gameDiv = document.getElementById("game")
  const board = new Board(gameDiv)
  board.start()
})

