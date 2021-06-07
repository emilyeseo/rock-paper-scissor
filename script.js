let player1Score = 0;
let player2Score = 0;

let buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
// selecting main 
const main = document.querySelector("main");
const endAlert = document.querySelector("#end-alert");
const endDesc = document.querySelector("#end-desc");
const returnMainBtn = document.querySelector("#")

const scoreReset = document.querySelector(".reset-button");


function printScore(player1Score) {
    console.log(player1Score.score)
}

function printScore(player2Score) {
    console.log(player2Score.score)
}

function gamePlay(game) {
    if (isGameOver()) {
        alert("Game Over.")
        returns;
    }

    let buttonId;
    if (game.target.tagName.toLowerCase() == "i") {
        buttonId = e.target.parentNode.id;
    } else {
        buttonId = e.target.id;
    }
    }
}

