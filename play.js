// Retrieve the username from localStorage
const storedName = localStorage.getItem('userName');

// Display the username on the page
if (storedName) {
  document.getElementById('playerName').textContent = storedName;
}

// Function to increment the score
function incrementScore() {
    // Retrieve the current score from localStorage or default to 0 if not found
    let score = parseInt(localStorage.getItem('score')) || 0;
  
    // Initialize clickValue to 1 if it's not already set
    if (isNaN(incrementScore.clickValue)) {
      incrementScore.clickValue = 1;
    }

    // Increment the score by 
    score += incrementScore.clickValue;
  
    // Update the score in localStorage
    localStorage.setItem('score', score);
  
    // Update the score display
    document.getElementById('count').value = score;
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
  
  // Simulate chat messages that will come over WebSocket
setInterval(() => {
    const score = Math.floor(Math.random() * 3000);
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="player-event">Eich</span> scored ${score}</div>` +
      chatText.innerHTML;
  }, 5000);
  
  