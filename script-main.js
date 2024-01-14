function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    switch(playerChoice) {
        case 'rock':
            if (computerChoice === 'scissors') {
                console.log('Player wins!');
            } else if (computerChoice === 'paper') {
                console.log('Computer wins!');
            } else {
                console.log('It\'s a tie!');
            }
            break;
        case 'paper':
            if (computerChoice === 'rock') {
                console.log('Player wins!');
            } else if (computerChoice === 'scissors') {
                console.log('Computer wins!');
            } else {
                console.log('It\'s a tie!');
            }
            break;
        case 'scissors':
            if (computerChoice === 'paper') {
                console.log('Player wins!');
            } else if (computerChoice === 'rock') {
                console.log('Computer wins!');
            } else {
                console.log('It\'s a tie!');
            }
            break;
        default:
            console.log('Invalid choice');
            return;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Choose rock, paper, or scissors to play a game!");
        if (!['rock', 'paper', 'scissors'].includes(playerChoice.toLowerCase())) {
            console.log("Invalid choice, please choose rock, paper, or scissors.");
            i--;
            continue;
        }
        playRound(playerChoice, getComputerChoice());
    }
}



