import GameBoardModule from './GameBoard.js';
import Globals from './Globals.js';

const Display = (() => {
    let board = [];
    
    function displayBoard() {
        const gameContainer = document.getElementById("game-container");

        for (let r = 0; r < Globals.ROWS; r++) {
            const row = [];

            for (let c = 0; c < Globals.COLS; c++) {
                const moveBlock = document.createElement("div");
                moveBlock.classList.add("move-block");

                gameContainer.appendChild(moveBlock);
                row.push(moveBlock);
            }

            board.push(row);
        }
    }

    function displayMove(row, col, player) {
        const currentBlock = board[row][col];
        currentBlock.textContent = player;
    }


    function displayOutcome(player) {
        const gameInfo = document.getElementById("game-info");
        const gameOutcome = document.getElementById("game-outcome");

        gameInfo.style.display = "flex";

        if (player === "X") {
            gameOutcome.textContent = `${GameBoardModule.getPlayerOneName()} WINS!`;
        } else if (player === "O") {
            gameOutcome.textContent = `${GameBoardModule.getPlayerTwoName()} WINS!`;
        } else {
            gameOutcome.textContent = `Draw.`;
        }
    }

    function displayScores() {
        const scoreOneContainer = document.getElementById("player-one-score");
        const scoreTwoContainer = document.getElementById("player-two-score");
        const scoreOne = GameBoardModule.getScores('playerOne');
        const scoreTwo = GameBoardModule.getScores('playerTwo');

        scoreOneContainer.textContent = `${scoreOne}`;
        scoreTwoContainer.textContent = `${scoreTwo}`;
    }

    function clearDisplay() {
        const gameInfo = document.getElementById("game-info");

        gameInfo.style.display = "none";

        document.querySelectorAll(".move-block").forEach(block => {
            block.textContent = "";
            block.style.pointerEvents = "auto";
        });
    }

    return { 
        displayBoard, 
        displayMove, 
        displayOutcome,
        displayScores,
        clearDisplay
    };

})();

export default Display;