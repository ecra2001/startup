let lastPrinted = 0;

document.addEventListener('DOMContentLoaded', function() {
// Display the username on the page
const playerNameEl = document.querySelector('.player-name');
playerNameEl.textContent = getPlayerName();
});

// Retrieve the username from localStorage
function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Mystery player';
}

// Function to increment the score
  function incrementScore() {
      // Retrieve the current score from localStorage or default to 0 if not found
    let score = parseInt(localStorage.getItem('score')) || 0;
    
    // Retrieve clickValue from localStorage or default to 1 if not found
    let clickValue = parseInt(localStorage.getItem('clickValue')) || 1;

      // Increment the score by 
      score += clickValue;
    
      // Update the score in localStorage
      localStorage.setItem('score', score);
    
      // Update the score display
      document.getElementById('count').value = score;

      this.updateScore(score);
      if(score > lastPrinted + 100){
        lastPrinted = Math.floor(score / 100) * 100;
        this.saveScore(score);
      }
    }
  
  // Function to reset the score
  function resetScore() {
    // Set the score back to 0
    localStorage.setItem('score', 0);
  
    // Update the score display
    document.getElementById('count').value = 0;
  }
  
  // Initialize the score if it hasn't been set before
  if (!localStorage.getItem('score')) {
    localStorage.setItem('score', 0);
  }
  
  // Retrieve the score from localStorage and display it
  document.getElementById('count').value = localStorage.getItem('score');

  function updateScore(score) {
    const scoreEl = document.querySelector('#score');
    scoreEl.textContent = score;
  }

  function saveScore(score) {
    const userName = this.getPlayerName();
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
    scores = this.updateScores(userName, score, scores);

    localStorage.setItem('scores', JSON.stringify(scores));
  }

  function updateScores(userName, score, scores) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    return scores;
  }
  
  // Simulate chat messages that will come over WebSocket
setInterval(() => {
    const score = Math.floor(Math.random() * 3000);
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="player-event">Eich</span> scored ${score}</div>` +
      chatText.innerHTML;
  }, 5000);
  
  