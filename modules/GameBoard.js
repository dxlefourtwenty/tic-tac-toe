import Globals from "./Globals.js";
import Display from "./Display.js";

const GameBoardModule = (() => {
    let instance = null;
    let currPlayer = 'X';

    class GameBoard {
        #rows;
        #cols;
        #board;

        constructor(rows, cols) {
            this.#rows = rows;
            this.#cols = cols;
            this.#board = this.initializeBoard();
        }

        initializeBoard() {
            let board = [];
            for (let i = 0; i < this.#rows; i++) {
                board.push(Array(this.#cols).fill(" "));
            }
            return board;
        }

        printBoard() {
            console.log("\n");
            console.log(this.#board.map(row => row.join(" | ")).join("\n---------\n"));
            console.log("\n");
        }

        checkWin(player) {
            const b = this.#board;

            for (let r = 0; r < Globals.ROWS; r++) {
                if (b[r][0] === player && b[r][1] === player && b[r][2] === player) 
                    return true;
            }
            
            for (let c = 0; c < Globals.COLS; c++) {
                if (b[0][c] === player && b[1][c] === player && b[2][c] === player)
                    return true;
            }

            if (b[0][0] === player && b[1][1] === player && b[2][2] === player)
                return true;

            if (b[0][2] === player && b[1][1] === player && b[2][0] === player)
                return true;

            return false;
        }

        isFull() {
            return this.#board.every(row => row.every(cell => cell != " "));
        }

        makeMove(row, col, player) {
            if (this.#board[row][col] !== " ") {
                console.log("This spot has already been taken!");
            }

            this.#board[row][col] = player;
            this.printBoard();

            if (this.checkWin(player)) {
                console.log(`Player ${player} wins`);
                return true;
            }

            if (this.isFull()) {
                console.log("It's a draw");
                return true;
            }

            return false;
        }
    }

    function createGame() {
        if (!instance) {
            instance = new GameBoard(Globals.ROWS, Globals.COLS);
        } 
        return instance;
    }

    function togglePlayer() {
        if (currPlayer === 'X') {
            currPlayer = 'O';
        } else if (currPlayer === 'O') {
            currPlayer = 'X';
        }
    }

    function getCurrPlayer() {
        return currPlayer;
    }

    return { createGame, togglePlayer, getCurrPlayer };
    
})();

export default GameBoardModule;
