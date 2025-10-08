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

    function updateScore() {

    }

    function displayWin() {
        
    }

    return { displayBoard, displayMove };

})();

export default Display;