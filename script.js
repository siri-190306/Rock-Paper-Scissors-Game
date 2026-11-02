const choiceButtons = document.querySelectorAll(".choice-btn");
const userScoreDisplay = document.getElementById("userScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resultText = document.getElementById("resultText");
const resultMessage = document.getElementById("resultMessage");
const userChoiceDisplay = document.getElementById("userChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const resetButton = document.getElementById("resetBtn");
const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
function getComputerChoice() {
    const randomNumber = Math.floor(
        Math.random() * choices.length
    );
    return choices[randomNumber];
}
function findWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw";
    }
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    }
    return "lose";
}
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = findWinner(userChoice, computerChoice);
    userChoiceDisplay.textContent = userChoice;
    computerChoiceDisplay.textContent = computerChoice;
    if (winner === "win") {
        userScore++;
        resultText.textContent = "You Win! 🎉";
        resultMessage.textContent =
            "Great move! You defeated the computer.";

    }
    else if (winner === "lose") {
        computerScore++;
        resultText.textContent = "Computer Wins! 🤖";
        resultMessage.textContent =
            "Oops! Better luck on the next round.";

    }
    else {
        resultText.textContent = "It's a Draw! 🤝";
        resultMessage.textContent =
            "Both selected the same choice. Try again!";
    }
    updateScore();
}
function updateScore() {
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}
choiceButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedChoice = button.dataset.choice;
        playGame(selectedChoice);
    });});
resetButton.addEventListener("click", function() {
    userScore = 0;
    computerScore = 0;
    updateScore();
    userChoiceDisplay.textContent = "-";
    computerChoiceDisplay.textContent = "-";
    resultText.textContent = "Ready to Play? 🎮";
    resultMessage.textContent =
        "Your move will appear here.";
});