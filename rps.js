const rock = 1
const paper = 2
const scissors = 3

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
    console.log(playerSelection, computerSelection)
    if(playerSelection === computerSelection) {
        console.log("Draw")
        return 0
    }
    if(playerSelection === rock) {
        if(computerSelection === paper) {
            console.log("Lose")
            return -1
        } else
        console.log("Win")
        return 1
    }
    if(playerSelection === scissors) {
        if(computerSelection === rock) {
            console.log("Lose")
            return -1
        } else
        console.log("Win")
        return 1
    }
    if(playerSelection === paper) {
        if(computerSelection === scissors) {
            console.log("Lose")
            return -1
        } else
        console.log("Win")
        return 1

    }
}

function game() {
    let winCount = 0
    for(let i = 0; i<5; i++) {
        winCount += playRound(getPlayerChoice(), getComputerChoice())
    } if (winCount > 0) { return "You Win!"} else {return "get good scrub"}
}