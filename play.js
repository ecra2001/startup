// Retrieve the username from localStorage
const storedName = localStorage.getItem('userName');

// Display the username on the page
if (storedName) {
  document.getElementById('playerName').textContent = storedName;
}

// Function to increment the score
function incrementScore() {
  // Retrieve the current score
  let score = parseInt(document.getElementById('count').value);

  // Increment the score by 1
  score++;

  // Update the score display
  document.getElementById('count').value = score;
}

// Function to reset the score
function resetScore() {
  // Set the score back to 0
  document.getElementById('count').value = 0;
}
