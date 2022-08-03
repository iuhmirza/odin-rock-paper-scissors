const rock = 1
const paper = 2
const scissors = 3

const dialog = document.createElement('div');
const buttons = document.querySelector('.buttons')
buttons.appendChild(dialog);

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3 + 1)
    return choice
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        dialog.textContent= `DRAW: Player - ${playerScore} CPU - ${computerScore}`
    }
    if(playerSelection === rock) {
        if(computerSelection === paper) {
            dialog.textContent= `LOSE: Player - ${playerScore} CPU - ${++computerScore}`
        } else
        dialog.textContent= `WIN: Player - ${++playerScore} CPU - ${computerScore}`
    }
    if(playerSelection === scissors) {
        if(computerSelection === rock) {
            dialog.textContent= `LOSE: Player - ${playerScore} CPU - ${++computerScore}`
        } else
        dialog.textContent= `WIN: Player - ${++playerScore} CPU - ${computerScore}`
    }
    if(playerSelection === paper) {
        if(computerSelection === scissors) {
            dialog.textContent= `LOSE: Player - ${playerScore} CPU - ${++computerScore}`
        } else
        dialog.textContent= `WIN: Player - ${++playerScore} CPU - ${computerScore}`

    }
    if(playerScore === 5) {
        dialog.textContent = `WINNER: Player - ${playerScore} CPU - ${computerScore}`
        playerScore = 0
        computerScore = 0
    }
    if(computerScore === 5) {
        dialog.textContent = `LOSER: Player - ${playerScore} CPU - ${computerScore}`
        playerScore = 0
        computerScore = 0
    }
}