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


    function displayWin() {

    }

    function displayScores() {
        const scoreOneContainer = document.getElementById("player-one-score");
        const scoreTwoContainer = document.getElementById("player-two-score");
        const scoreOne = GameBoardModule.getScores('X');
        const scoreTwo = GameBoardModule.getScores('O');

        scoreOneContainer.textContent = `Player 1: ${scoreOne}`;
        scoreTwoContainer.textContent = `Player 2: ${scoreTwo}`;
    }

    return { 
        displayBoard, 
        displayMove, 
        displayWin,
        displayScores 
    };

})();

export default Display;