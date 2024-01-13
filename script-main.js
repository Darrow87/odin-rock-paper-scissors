function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
    switch(playerChoice) {
        case 'rock':
            if (computerChoice === 'scissors') {
                return 'Player wins!';
            } else if (computerChoice === 'paper') {
                return 'Computer wins!';
            }
            break;
        case 'paper':
            if (computerChoice === 'rock') {
                return 'Player wins!';
            } else if (computerChoice === 'scissors') {
                return 'Computer wins!';
            }
            break;
        case 'scissors':
            if (computerChoice === 'paper') {
                return 'Player wins!';
            } else if (computerChoice === 'rock') {
                return 'Computer wins!';
            }
            break;
        default:
            return 'Invalid choice';
    }
    return 'It\'s a tie!';
}

