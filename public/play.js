lastPrinted = 0;

document.addEventListener('DOMContentLoaded', function() {
// Display the username on the page
const playerNameEl = document.querySelector('.player-name');
playerNameEl.textContent = getPlayerName();
// Retrieve and display the score for the current user
const score = getScoreForCurrentUser();
updateScore(score);
});

// Retrieve the username from localStorage
function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Mystery player';
}

// Retrieve the score for the current user from localStorage
function getScoreForCurrentUser() {
  const userName = getPlayerName();
  const scoresText = localStorage.getItem('scores');
  if (scoresText) {
      const scores = JSON.parse(scoresText);
      // Find the score associated with the current user
      const userScore = scores.find(score => score.name === userName);
      if (userScore) {
          return userScore.score;
      }
  }
  // If no score found for the user, return 0
  return 0;
}

// Function to increment the score
  function incrementScore() {
      // Retrieve the current score from localStorage or default to 0 if not found
    //let score = parseInt(localStorage.getItem('score')) || 0;
    let score = getScoreForCurrentUser();
    
    // Retrieve clickValue from localStorage or default to 1 if not found
    let clickValue = parseInt(localStorage.getItem('clickValue')) || 1;

      // Increment the score by 
      score += clickValue;
    
      // Update the score in localStorage
      updateScoreForCurrentUser(score);
    
      // Update the score display
      document.getElementById('score').value = score;

      this.updateScore(score);
      if(score > lastPrinted + 100){
        lastPrinted = Math.floor(score / 100) * 100;
        this.saveScore(score);
      }
    }

  // Update the score for the current user in localStorage
function updateScoreForCurrentUser(score) {
  // Update the score in localStorage
  // localStorage.setItem('score', score);*******

  const userName = getPlayerName();
  let scores = [];
  const scoresText = localStorage.getItem('scores');
  if (scoresText) {
      scores = JSON.parse(scoresText);
  }

  // Update the score for the current user or add a new entry if not found
  let found = false;
  for (const userScore of scores) {
      if (userScore.name === userName) {
          userScore.score = score;
          found = true;
          break;
      }
  }
  if (!found) {
      scores.push({ name: userName, score: score });
  }

  // Update localStorage with updated scores
  localStorage.setItem('scores', JSON.stringify(scores));
}
  
  // Function to reset the score
  function resetScore() {
    // Set the score back to 0
    // localStorage.setItem('score', 0);
    updateScoreForCurrentUser(0);
  
    // Update the score display
    // document.getElementById('score').value = 0;
    updateScore(0);
  }
  
  // Initialize the score if it hasn't been set before
  if (!localStorage.getItem('score')) {
    localStorage.setItem('score', 0);
  }
  
  // Retrieve the score from localStorage and display it
  // document.getElementById('score').value = localStorage.getItem('score');

  function updateScore(score) {
    const scoreEl = document.querySelector('#score');
    scoreEl.textContent = score;
  }

  async function saveScore(score) {
    const userName = this.getPlayerName();
    const date = new Date().toLocaleDateString();
    const newScore = {name: userName, score: score, date: date};

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newScore),
      });

      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just track scores locally
      // this.updateScoresLocal(newScore);
      updateScoreForCurrentUser(score);
    }
  }

  function updateScoresLocal(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore > prevScore.score) {
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

    localStorage.setItem('scores', JSON.stringify(scores));
  }
  
  // Simulate chat messages that will come over WebSocket
setInterval(() => {
    const score = Math.floor(Math.random() * 3000);
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="player-event">Eich</span> scored ${score}</div>` +
      chatText.innerHTML;
  }, 5000);
  
  