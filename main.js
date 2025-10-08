import GameBoardModule from "./modules/GameBoard.js";
import Display from "./modules/Display.js";
import Globals from "./modules/Globals.js";

Display.displayBoard();
Display.displayScores();
const game = GameBoardModule.createGame();
game.printBoard();

const gameContainer = document.getElementById("game-container");
const cells = gameContainer.querySelectorAll(".move-block");

gameContainer.addEventListener("click", handleClick);

function handleClick(e) {
    const clickedBlock = e.target;
    const currPlayer = GameBoardModule.getCurrPlayer();

    if (!clickedBlock.classList.contains("move-block")) return;

    clickedBlock.style.pointerEvents = "none";

    const index = Array.from(cells).indexOf(clickedBlock);
    const row = Math.floor(index / Globals.COLS);
    const col = index % Globals.COLS;

    game.makeMove(row, col, currPlayer);
    if (game.checkWin(currPlayer) || game.isFull()) {
        gameContainer.removeEventListener("click", handleClick);
    }

    Display.displayMove(row, col, currPlayer);
    Display.displayScores();
    GameBoardModule.togglePlayer();

    console.log("Selected: ", row, col);
}



