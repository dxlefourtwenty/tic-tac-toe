const GameBoardModule = (() => {
    let instance = null;

    const ROWS = 3;
    const COLS = 3;

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
                board.push(Array(this.#cols).fill(null));
            }
            return board;
        }

        printBoard() {
            console.log(this.#board);
        }
    }

    function createGame() {
        if (!instance) {
            instance = new GameBoard(ROWS, COLS);
        } 
        return instance;
    }

    return { createGame };
    
})();

export default GameBoardModule;
