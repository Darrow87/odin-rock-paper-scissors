let playerScore = 0;
let computerScore = 0;
const maxRounds = 5; // Set the number of rounds for the game

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    let result;
    switch(playerChoice) {
        case 'rock':
            if (computerChoice === 'scissors') {
                playerScore++;
                result = 'Player wins the round!';
            } else if (computerChoice === 'paper') {
                computerScore++;
                result = 'Computer wins the round!';
            } else {
                result = 'Round is a tie!';
            }
            break;
        case 'paper':
            if (computerChoice === 'rock') {
                playerScore++;
                result = 'Player wins the round!';
            } else if (computerChoice === 'scissors') {
                computerScore++;
                result = 'Computer wins the round!';
            } else {
                result = 'Round is a tie!';
            }
            break;
        case 'scissors':
            if (computerChoice === 'paper') {
                playerScore++;
                result = 'Player wins the round!';
            } else if (computerChoice === 'rock') {
                computerScore++;
                result = 'Computer wins the round!';
            } else {
                result = 'Round is a tie!';
            }
            break;
        default:
            result = 'Invalid choice';
    }
    displayResult(result);
    checkGameWinner();
}

function displayResult(message) {
    let scoreMessage = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    document.getElementById("result").innerText = message + "\n" + scoreMessage;
}

function checkGameWinner() {
    if (playerScore === maxRounds || computerScore === maxRounds) {
        let winner = playerScore > computerScore ? "Player" : "Computer";
        displayFinalWinner(winner);
        playerScore = 0; // Reset scores
        computerScore = 0;
    }
}

function displayFinalWinner(winner) {
    let finalResult = `The winner of the game is: ${winner}!`;
    document.getElementById("result").innerText += "\n" + finalResult;
}

document.getElementById("rock").addEventListener("click", function() { playRound("rock", getComputerChoice()); });
document.getElementById("paper").addEventListener("click", function() { playRound("paper", getComputerChoice()); });
document.getElementById("scissors").addEventListener("click", function() { playRound("scissors", getComputerChoice()); });
