const rock = 1
const paper = 2
const scissors = 3

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3 + 1)
    return choice
}

function gameRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)
    if(playerSelection === computerSelection) {
        return "Draw"
    }
    if(playerSelection === rock) {
        if(computerSelection === paper) {
            return "Lose"
        } else return "Win"
    }
    if(playerSelection === scissors) {
        if(computerSelection === rock) {
            return "Lose"
        } else return "Win"
    }
    if(playerSelection === paper) {
        if(computerSelection === scissors) {
            return "Lose"
        } else return "Win"

    }
}
    