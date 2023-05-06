window.alert(
  `Hello everyone! Let/s play the game 'Rock, Paper, Scissors' You have 5 rounds! Good luck!`
);
function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  const winMessage = `You Win! ${capitalizeFirstLetter(
    playerSelection
  )} beats ${capitalizeFirstLetter(computerSelection)}`;
  const loseMessage = `You Lose! ${capitalizeFirstLetter(
    computerSelection
  )} beats ${capitalizeFirstLetter(playerSelection)}`;

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return winMessage;
  } else {
    return loseMessage;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      `Round ${i + 1}:\nEnter Rock, Paper, or Scissors:`
    );

    if (playerSelection === null) {
      alert('User cancelled the game.');
      return;
    }

    while (
      playerSelection.trim() === '' ||
      !['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())
    ) {
      playerSelection = prompt(
        `Invalid input. Round ${i + 1}:\nEnter Rock, Paper, or Scissors:`
      );
      if (playerSelection === null) {
        alert('User cancelled the game.');
        return;
      }
    }

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    alert(`Round ${i + 1} Result:\n${result}`);

    if (result.startsWith('You Win')) {
      playerScore++;
    } else if (result.startsWith('You Lose')) {
      computerScore++;
    }
  }

  const finalResult =
    `Final Score: You - ${playerScore} | Computer - ${computerScore}\n` +
    (playerScore > computerScore
      ? 'You won the game!'
      : playerScore < computerScore
      ? 'You lost the game!'
      : "It's a tie!");
  alert(finalResult);
}

game();
