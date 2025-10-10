import Globals from "./Globals.js";

const GameBoardModule = (() => {
    let instance = null;
    const playerOne = { name: "Player 1", marker: "X"};
    const playerTwo = { name: "Player 2", marker: "O"};
    let currPlayer = playerOne;

    let playerScores = { playerOne: 0, playerTwo: 0 };

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

        checkWin(marker) {
            const b = this.#board;

            for (let r = 0; r < Globals.ROWS; r++) {
                if (b[r][0] === marker && b[r][1] === marker && b[r][2] === marker) return true;
            }

            for (let c = 0; c < Globals.COLS; c++) {
                if (b[0][c] === marker && b[1][c] === marker && b[2][c] === marker) return true;
            }

            if (b[0][0] === marker && b[1][1] === marker && b[2][2] === marker) return true;
            if (b[0][2] === marker && b[1][1] === marker && b[2][0] === marker) return true;

            return false;
        }

        isFull() {
            return this.#board.every(row => row.every(cell => cell != " "));
        }

        makeMove(row, col, marker) {
            this.#board[row][col] = marker;

            if (this.checkWin(marker)) {
                incrementScore(currPlayer);
                return true;
            }

            return false;
        }

        resetBoard() {
            this.#board = this.initializeBoard();
        }
    }

    function createGame() {
        if (!instance) {
            instance = new GameBoard(Globals.ROWS, Globals.COLS);
        } 
        return instance;
    }

    function resetGame() {
        if (instance) {
            instance.resetBoard();
        }
        currPlayer = playerOne;
    }

    function togglePlayer() {
        currPlayer = currPlayer === playerOne ? playerTwo : playerOne;
    }

    function getCurrPlayer() {
        return currPlayer;
    }

    function incrementScore(player) {
        if (player.marker === "X") playerScores.playerOne++;
        else if (player.marker === "O") playerScores.playerTwo++;
    }

    function getScores(player = null) {
        return player ? playerScores[player] : { ...playerScores };
    }

    function setPlayerOneName(name) {
        if (name != null) {
            playerOne.name = name;
        }
        console.log("Player One Name Set");
    }

    function setPlayerTwoName(name) {
        if (name != null) {
            playerTwo.name = name;
        }
    }

    function getPlayerOneName() {
        return playerOne.name;
    }

    function getPlayerTwoName() {
        return playerTwo.name;
    }

    return { 
        createGame, 
        togglePlayer, 
        getCurrPlayer,
        incrementScore,
        getScores,
        resetGame,
        setPlayerOneName,
        setPlayerTwoName,
        getPlayerOneName,
        getPlayerTwoName 
    };
    
})();

export default GameBoardModule;
