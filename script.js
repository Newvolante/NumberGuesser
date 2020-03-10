let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// each new round it generates the new secret target number (0-9)
let  generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

// whose guess is closer to the secret target number?
// returns true if the human player wins (or it's a tie)
let compareGuesses = (human, computer, target) => {
  let userDiff = Math.abs(target - human);
  let cpuDiff = Math.abs(target - computer);
    return (userDiff <= cpuDiff);
}

// increases winner's score after each round
let updateScore = winner => {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
}

// updates the round number after each round
function advanceRound() {
  currentRoundNumber ++;
}
