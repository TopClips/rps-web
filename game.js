// game.js
const choices = ['scissors', 'paper', 'rock'];

function getAiChoice() {
  // You can use a machine learning algorithm here to make the AI adaptive
  // For now, we will just randomly select a choice
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(playerChoice, aiChoice) {
  if (playerChoice === aiChoice) {
    return 'Draw';
  } else if (
    (playerChoice === 'scissors' && aiChoice === 'paper') ||
    (playerChoice === 'paper' && aiChoice === 'rock') ||
    (playerChoice === 'rock' && aiChoice === 'scissors')
  ) {
    return 'You win!';
  } else {
    return 'You lose';
  }
}

const buttons = document.querySelectorAll('.choice');
const resultDiv = document.querySelector('#result');
const winsSpan = document.querySelector('#wins');
const lossesSpan = document.querySelector('#losses');

let wins = 0;
let losses = 0;

// Array to store previous choices
const history = [];

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const playerChoice = event.target.id;
    const aiChoice = getAiChoice();
    const result = getResult(playerChoice, aiChoice);
    if (result === 'You win!') {
      wins++;
      winsSpan.innerHTML = wins;
    } else if (result === 'You lose') {
      losses++;
      lossesSpan.innerHTML = losses;
    }
    resultDiv.innerHTML = `You chose ${playerChoice}, AI chose ${aiChoice}. ${result}`;
    history.push({ playerChoice, aiChoice, result });
  });
});
