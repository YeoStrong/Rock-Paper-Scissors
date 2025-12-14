// 1. Create a new function named getHumanChoice
function getComputerChoice() {

  const randomNumber = Math.floor(Math.random() *3)
  let computerChoice = ""
  if (randomNumber == 0) {
    computerChoice = 'Rock';
    return computerChoice;
  }
  else if (randomNumber == 1) {
    computerChoice = 'Paper';
    return computerChoice;
  }
  else {
    computerChoice = 'Scissors';
    return computerChoice;
  } 
}
// console.log(getComputerChoice());

// 2. Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
function getHumanChoice() {
  let str = prompt("What is your pick?");
  const humanChoice = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return humanChoice;
}
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let humanNum;
  let computerNum;

  if (humanChoice == 'Rock') {
    humanNum = 0;
  } else if (humanChoice == 'Paper') {
    humanNum = 1;
  } else if (humanChoice == 'Scissors') {
    humanNum = 2;
  }

  if (computerChoice == 'Rock') {
    computerNum = 0;
  } else if (computerChoice == 'Paper') {
    computerNum = 1;
  } else if (computerChoice == 'Scissors') {
    computerNum = 2;
  }

  const diff = humanNum - computerNum;
  const remainderResult = ( diff % 3 + 3) % 3;

  if (remainderResult == 0) {
    return 'Draw!'
  } else if (remainderResult == 1) {
    humanScore += 1;
    return 'You won! ' + humanChoice + ' beats ' + computerChoice;
  }
  else if (remainderResult == 2) {
    computerScore += 1;
    return 'You lose! ' + computerChoice + ' beats ' + humanChoice;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const roundResult = playRound(humanChoice, computerChoice);

    console.log(`Round ${i + 1}: ${roundResult}`);
    console.log(`Current Score: You ${humanScore} - Computer ${computerScore}`);
  }
  
  console.log('\n--- Final Game Result ---');
  if (humanScore > computerScore) {
    console.log('You won the match!');
  }
  else if (humanScore < computerScore) {
    console.log('You lost the match');
  } else {
    console.log('DRAWWWWWWWWW!');
  }
}

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