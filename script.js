const totalScore = { computerScore: 0, playerScore: 0 };

function getComputerChoice() {
  const rpsChoice = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}

function getResult(playerChoice, computerChoice) {
  let score;

  // Convert playerChoice to lowercase to ensure case insensitivity
  playerChoice = playerChoice.toLowerCase();

  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0;
  }
  // All situations where human wins, set `score` to 1
  else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    score = 1;
  }
  // Otherwise human loses (aka set score to -1)
  else {
    score = -1;
  }

  return score;
}

function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');

  if (score === -1) {
    resultDiv.innerText = 'You lost!!';
  } else if (score === 0) {
    resultDiv.innerText = "It's a tie!!";
  } else {
    resultDiv.innerText = 'You Won!!!';
  }

  handsDiv.innerText = `Your score: ${playerChoice} vs ${computerChoice}`;
  playerScoreDiv.innerText = totalScore['playerScore'];
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  totalScore['playerScore'] += score;
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton');

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });

  const endGameButton = document.getElementById('endGameButton');
  endGameButton.onclick = () => endGame();
}

function endGame(totalScore) {
  
    const resultDiv = document.getElementById('result');
    const handsDiv = document.getElementById('hands');
    const playerScoreDiv = document.getElementById('player-score');

    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''
    totalScore['playerScore'] = 0


}

playGame();
