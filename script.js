// Getting references to the HTML elements
const userScoreE1 = document.getElementById('Userscore');
const computerScoreEl = document.getElementById('Computerscore');
const messageEl = document.getElementById('msg');

// User and Computer scores
let userScore = 0;
let computerScore = 0;

// Getting the options (Rock, Paper, Scissors)
const options = document.querySelectorAll('.option img');

// Function to generate computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3); // random index between 0 and 2
    return choices[randomIndex];
}

// Function to check the winner
function checkWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw'; // It's a tie
    }

    // Winning combinations
    if (
        (userChoice === 'Rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'Rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user'; // User wins
    } else {
        return 'computer'; // Computer wins
    }
}

// Function to update the message and score
function updateGameResult(result, userChoice, computerChoice) {
    if (result === 'draw') {
        messageEl.textContent = `It's a tie! Both chose ${userChoice}.`;
    } else if (result === 'user') {
        messageEl.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
        userScore++;
        userScoreEl.textContent = userScore;
    } else {
        messageEl.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
        computerScore++;
        computerScoreEl.textContent = computerScore;
    }
}

// Adding event listeners to each option (Rock, Paper, Scissors)
options.forEach(option => {
    option.addEventListener('click', () => {
        const userChoice = option.id; // Get the user choice based on image ID (Rock, paper, scissors)
        const computerChoice = getComputerChoice(); // Get computer's random choice
        const result = checkWinner(userChoice, computerChoice); // Determine the winner
        updateGameResult(result, userChoice, computerChoice); // Update the result and scores
    });
});

