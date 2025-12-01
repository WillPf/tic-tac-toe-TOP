function createBoard() {
    const container = document.querySelector(".ctn");
    let div = document.createElement("div");
    for (let i = 0; i< 9; i++) {
        container.appendChild(div);
        div.outerHTML = `<div class='square' id=${i} onclick='markBoard(this, currentPlayer)'></div>`;
    }
};


function Player(symbol) {
    function setName(num) {
        this.name = prompt(`Please enter a name for player ${num}`);
    }
    return {symbol, setName}
}

createBoard();

const player1 = new Player("X");
const player2 = new Player("O");
player1.setName(1);
player2.setName(2);

let currentPlayer = player1;
updateUI();

function updateUI() {
    const playerName = document.querySelector(".player");
    playerName.innerHTML = `It's ${currentPlayer.name}'s turn to play`;
}


function markBoard(item, player) {
    if (item.classList.value != "square disabled") {
        let symbol = player.symbol;
        item.outerHTML = `<div class='square disabled' id=${item.id}>${symbol}</div>`;
        currentPlayer == player1 ? currentPlayer = player2: currentPlayer = player1;
    }
    updateUI();
    if(test() == player1.symbol) {
        document.querySelector(".player").innerHTML = `${player1.name} won the game.`;
        document.querySelector(".popup").classList.add("enabled");
    }
    if(test() == player2.symbol) {
        document.querySelector(".player").innerHTML = `${player2.name} won the game.`
        document.querySelector(".popup").classList.add("enabled");
    }
    let disabled = document.querySelectorAll(".disabled");
    if (disabled.length == 9) {
        document.querySelector(".player").innerHTML =  "Nobody won the game.";
        document.querySelector(".popup").classList.add("enabled");
    }
    
}

function test() {
    let squares = document.querySelectorAll(".square");
    if (squares[0].innerHTML == squares[1].innerHTML && squares[0].innerHTML == squares[2].innerHTML) if(squares[0].innerHTML != "") return squares[0].innerHTML;
    if (squares[3].innerHTML == squares[4].innerHTML && squares[3].innerHTML == squares[5].innerHTML) if(squares[3].innerHTML != "") return squares[3].innerHTML;
    if (squares[6].innerHTML == squares[7].innerHTML && squares[6].innerHTML == squares[8].innerHTML) if(squares[6].innerHTML != "") return squares[6].innerHTML;
    if (squares[0].innerHTML == squares[3].innerHTML && squares[0].innerHTML == squares[6].innerHTML) if(squares[0].innerHTML != "") return squares[0].innerHTML;
    if (squares[1].innerHTML == squares[4].innerHTML && squares[1].innerHTML == squares[7].innerHTML) if(squares[1].innerHTML != "") return squares[1].innerHTML;
    if (squares[2].innerHTML == squares[5].innerHTML && squares[2].innerHTML == squares[8].innerHTML) if(squares[2].innerHTML != "") return squares[2].innerHTML;
    if (squares[0].innerHTML == squares[4].innerHTML && squares[0].innerHTML == squares[8].innerHTML) if(squares[0].innerHTML != "") return squares[0].innerHTML;
    if (squares[2].innerHTML == squares[4].innerHTML && squares[2].innerHTML == squares[6].innerHTML) if(squares[2].innerHTML != "") return squares[2].innerHTML;
        
}

function restart() {
    let squares = document.querySelectorAll(".square");
        squares.forEach( square => {
            square.remove();
        })
    createBoard();
    updateUI();
    document.querySelector(".popup").classList.value = "popup";
}
