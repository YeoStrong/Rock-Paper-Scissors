function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = "";
  if (randomNumber == 0) {
    computerChoice = "Rock";
    return computerChoice;
  } else if (randomNumber == 1) {
    computerChoice = "Paper";
    return computerChoice;
  } else {
    computerChoice = "Scissors";
    return computerChoice;
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let humanNum;
  let computerNum;

  if (humanChoice == "Rock") {
    humanNum = 0;
  } else if (humanChoice == "Paper") {
    humanNum = 1;
  } else if (humanChoice == "Scissors") {
    humanNum = 2;
  }

  if (computerChoice == "Rock") {
    computerNum = 0;
  } else if (computerChoice == "Paper") {
    computerNum = 1;
  } else if (computerChoice == "Scissors") {
    computerNum = 2;
  }

  const diff = humanNum - computerNum;
  const remainderResult = ((diff % 3) + 3) % 3;

  let roundResultMessage = "";

  if (remainderResult == 0) {
    roundResultMessage = "Draw!";
  } else if (remainderResult == 1) {
    humanScore += 1;
    roundResultMessage = "You won! " + humanChoice + " beats " + computerChoice;
  } else if (remainderResult == 2) {
    computerScore += 1;
    roundResultMessage =
      "You lose! " + computerChoice + " beats " + humanChoice;
  }

  messageDiv.innerHTML = `<h3>${roundResultMessage}</h3>`;
  scoreDisplay.textContent = `Current Score: You ${humanScore} - Computer ${computerScore}`;

  if (humanScore == 5 || computerScore == 5) {
    messageDiv.innerHTML = `<h3>GAME OVER! THE WINNER IS ${
      humanScore == 5 ? "YOU!" : "COMPUTER!"
    }</h3>`;

    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  const humanSelection = button.id.charAt(0).toUpperCase() + button.id.slice(1);
  button.innerText = humanSelection;
  button.addEventListener("click", () => {
    playRound(humanSelection, getComputerChoice());
  });
});

const resultDiv = document.querySelector("#result");
const messageDiv = document.querySelector("#round-message");
const scoreDisplay = document.querySelector("#score-display");
scoreDisplay.textContent = `Current Score: You ${humanScore} - Computer ${computerScore}`;

// rock = 0
// paper = 1
// scissors = 2

// rock
// 0 - 0 = 0 draw
// 0 - 1 = -1 lose
// 0 - 2 = -2 win
// paper
// 1 - 0 = 1 win
// 1 - 1 = 0 draw
// 1 - 2 = -1 lose

// scissors
// 2 - 0 = 2 lose
// 2 - 1 = 1 win
// 2 - 2 = 0 draw
// console.log(-1 % 3);
