const rock = 1
const paper = 2
const scissors = 3

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const dialog = document.createElement('div');
const body = document.querySelector('body')
document.body.appendChild(dialog);

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3 + 1)
    return choice
}

function getPlayerChoice () {
    choice = prompt("Rock/Paper/Scissors")
    choice = choice.toUpperCase()
    switch(choice) {
        case "ROCK":
            return rock
        case "PAPER":
            return paper
        case "SCISSORS":
            return scissors
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        dialog.textContent= `DRAW: Player - ${playerScore} CPU - ${computerScore}`
        return 0
    }
    if(playerSelection === rock) {
        if(computerSelection === paper) {
            dialog.textContent= `LOSE: Player - ${playerScore} CPU - ${++computerScore}`
            return -1
        } else
        dialog.textContent= `WIN: Player - ${++playerScore} CPU - ${computerScore}`
        return 1
    }
    if(playerSelection === scissors) {
        if(computerSelection === rock) {
            dialog.textContent= `LOSE: Player - ${playerScore} CPU - ${++computerScore}`
            return -1
        } else
        dialog.textContent= `WIN: Player - ${++playerScore} CPU - ${computerScore}`
        return 1
    }
    if(playerSelection === paper) {
        if(computerSelection === scissors) {
            dialog.textContent= `LOSE: Player - ${playerScore} CPU - ${++computerScore}`
            return -1
        } else
        dialog.textContent= `WIN: Player - ${++playerScore} CPU - ${computerScore}`
        return 1

    }
}
/*
function game() {
    let winCount = 0
    for(let i = 0; i<5; i++) {
        winCount += playRound(getPlayerChoice(), getComputerChoice())
    } if (winCount > 0) { return "You Win!"} else {return "get good scrub"}
}
*/