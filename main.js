import GameBoardModule from "./modules/GameBoard.js";
import Display from "./modules/Display.js";
import Globals from "./modules/Globals.js";

Display.displayBoard();
Display.displayScores();
const game = GameBoardModule.createGame();
game.printBoard();

const gameContainer = document.getElementById("game-container");
const playAgainButton = document.getElementById("play-again");

gameContainer.addEventListener("click", clickBlock);
playAgainButton.addEventListener("click", clickReset);

function clickBlock(e) {
    const clickedBlock = e.target;
    const currPlayer = GameBoardModule.getCurrPlayer();

    if (!clickedBlock.classList.contains("move-block")) return;
    clickedBlock.style.pointerEvents = "none";

    const cells = gameContainer.querySelectorAll(".move-block");
    const index = Array.from(cells).indexOf(clickedBlock);
    const row = Math.floor(index / Globals.COLS);
    const col = index % Globals.COLS;

    game.makeMove(row, col, currPlayer);

    if (game.isFull()) {
        gameContainer.removeEventListener("click", clickBlock);
        Display.displayOutcome("Draw");
    }

    if (game.checkWin(currPlayer)) {
        gameContainer.removeEventListener("click", clickBlock);
        Display.displayOutcome(currPlayer);
    }

    Display.displayMove(row, col, currPlayer);
    Display.displayScores();
    GameBoardModule.togglePlayer();

    console.log("Selected: ", row, col);
}

function clickReset(e) {
    GameBoardModule.resetGame();
    Display.clearDisplay();

    gameContainer.addEventListener("click", clickBlock);
}



