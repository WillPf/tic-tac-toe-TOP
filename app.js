
(function createBoard() {
    const container = document.querySelector(".ctn");
    let div = document.createElement("div");
    for (let i = 0; i< 9; i++) {
        container.appendChild(div);
        div.outerHTML = "<div class='square' onclick='test(this)'></div>";
    }
})();



const Gameboard = {
    board: [[".", ".", "."], [".", ".", "."], [".", ".", "."]],
    render: function() {
        console.table(this.board);       
    },
    checkWin: function() {
        if (this.board[0][0] === this.board[0][1] && this.board[0][0] === this.board[0][2]) return this.board[0][0] != "."? this.board[0][0]: false;
        if (this.board[1][0] === this.board[1][1] && this.board[1][0] === this.board[1][2]) return this.board[1][0] != "."? this.board[1][0]: false;
        if (this.board[2][0] === this.board[2][1] && this.board[2][0] === this.board[2][2]) return this.board[2][0] != "."? this.board[2][0]: false;
        if (this.board[0][0] === this.board[1][0] && this.board[0][0] === this.board[2][0]) return this.board[0][0] != "."? this.board[0][0]: false;
        if (this.board[0][1] === this.board[1][1] && this.board[0][1] === this.board[2][1]) return this.board[0][1] != "."? this.board[0][1]: false;
        if (this.board[0][2] === this.board[1][2] && this.board[0][2] === this.board[2][2]) return this.board[0][2] != "."? this.board[0][2]: false;
        if (this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) return this.board[0][0] != "."? this.board[0][0]: false;
        if (this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0]) return this.board[0][2] != "."? this.board[0][2]: false;
        return false;
    }
}

function Player(symbol) {
    function draw(row, col) {
        Gameboard.board[row][col] = this.symbol;
        Gameboard.render();
        let winner = Gameboard.checkWin();
        if (player1.symbol === winner) console.log("Player 1 won");
        if (player2.symbol === winner) console.log("Player 2 won");
        
        
    }
    return {symbol, draw}
}

const player1 = new Player("X");
const player2 = new Player("O");

function test(item) {
    if (item.classList.value != "disabled") {
        let symbol = "X";
         item.outerHTML = `<div class='disabled'>${symbol}</div>`;
    }
    
}