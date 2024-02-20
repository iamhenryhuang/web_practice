function getComputerChoice() {
    let pssChoices = ['Stone', 'Paper', 'Scissors'];
    let computerChoice = pssChoices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

// player win : 1
// player lose : -1
// tie game : 0
function getResult(playerChoice, computerChoice) {
    let score;

    if (playerChoice === computerChoice) {
      score = 0;
    } else if (playerChoice === 'Stone' && computerChoice === 'Scissors') {
        score = 1;
    } else if (playerChoice === "Paper" && computerChoice === "Stone") {
        score = 1;
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        score = 1;
    } else {
      score = -1;
    }

    return score
}
  
function showResult(score, playerChoice, computerChoice) {
    let result = document.getElementById('result')
    switch (score) {
      case -1:
        result.innerText = `你輸了！\n你出了${playerChoice}\n電腦出了${computerChoice}`;
        break;
      case 0:
        result.innerText = `平手。\n你出了${playerChoice}\n電腦出了${computerChoice}`;
        break;
      case 1:
        result.innerText = `你贏了！\n你出了${playerChoice}\n電腦出了${computerChoice}`;
        break;
    }
}
  
function onClickPSS(playerChoice) {
    const computerChoice = getComputerChoice();
    const score = getResult(playerChoice.value, computerChoice);
    showResult(score, playerChoice.value, computerChoice);
  }
  
function playGame() {
    let pssButtons = document.querySelectorAll('.pssButton')
    
    pssButtons.forEach(pssButton => {
      pssButton.onclick = () => onClickPSS(pssButton);
    })
  
    // add click event listener on endGame button
    let endGameButton = document.getElementById('endGameButton');
    endGameButton.onclick = () => endGame();
}
  
function endGame() {
    let playerScore = document.getElementById('player-score');
    let hands = document.getElementById('hands');
    let result = document.getElementById('result');
    playerScore.innerText = '';
    hands.innerText = '';
    result.innerText = '';
}
  
playGame();
