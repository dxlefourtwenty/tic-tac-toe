import GameBoardModule from "./modules/GameBoard.js";

const game = GameBoardModule.createGame();
game.printBoard();

game.makeMove(1, 1, "X");
game.makeMove(0, 0, "O");
game.makeMove(0, 2, "X");
game.makeMove(0, 1, "O");
game.makeMove(2, 0, "X");