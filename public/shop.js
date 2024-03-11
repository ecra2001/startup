// Function to purchase upgrades
function purchaseUpgrade(upgradeNumber) {
  // Retrieve the current score from localStorage or default to 0 if not found
  let currentScore = parseInt(localStorage.getItem('score')) || 0;

  // Define upgrade costs and click values
  const upgradeCosts = [50, 100, 200, 500, 1000];
  const clickValues = [5, 10, 20, 50, 100];

  // Check if the user has enough points to purchase the upgrade
  if (currentScore >= upgradeCosts[upgradeNumber - 1]) {
      // Deduct the upgrade cost from the current score
      currentScore -= upgradeCosts[upgradeNumber - 1];

      // Update the click value based on the purchased upgrade
      localStorage.setItem('clickValue', clickValues[upgradeNumber - 1]);

      // Update the score in localStorage
      localStorage.setItem('score', currentScore);

      // Notify the user that the upgrade has been purchased
      alert(`Upgrade ${upgradeNumber} purchased successfully!`);

      // Update the score display
      document.getElementById('count').value = currentScore;
  } else {
      // Notify the user if they don't have enough points to purchase the upgrade
      alert('Insufficient points to purchase this upgrade.');
  }
}
