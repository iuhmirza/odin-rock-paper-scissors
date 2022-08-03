const rock = 1
const paper = 2
const scissors = 3

let playerScore = 0;
let computerScore = 0;

const dialog = document.createElement('div');
dialog.classList.add('flex', 'button');
const body = document.querySelector('body')
body.appendChild(dialog);

const resetButton = document.createElement('div');
resetButton.classList.add('flex', 'button');
resetButton.setAttribute("onclick", "reset()");
resetButton.innerHTML = '<img src = "img/reset.png" class="icon">';
body.appendChild(resetButton);

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3 + 1)
    return choice
}

function reset() {
    dialog.textContent = '';
    playerScore = 0;
    computerScore = 0;
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