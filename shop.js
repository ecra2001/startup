// Function to purchase upgrades
function purchaseUpgrade(upgradeNumber) {
    // Define upgrade costs and click values
    const upgradeCosts = [50, 100, 200, 500, 1000];
    const clickValues = [5, 10, 20, 50, 100];
  
    // Retrieve the current score from localStorage
    const currentScore = parseInt(localStorage.getItem('score'));
  
    // Check if the user has enough points to purchase the upgrade
    if (currentScore >= upgradeCosts[upgradeNumber - 1]) {
      // Deduct the upgrade cost from the current score
      const newScore = currentScore - upgradeCosts[upgradeNumber - 1];
      
      // Update the score in localStorage
      localStorage.setItem('score', newScore);
  
      // Update the click value based on the purchased upgrade
      const newClickValue = parseInt(localStorage.getItem('clickValue')) + clickValues[upgradeNumber - 1];
      localStorage.setItem('clickValue', newClickValue);
  
      // Notify the user that the upgrade has been purchased
      alert(`Upgrade ${upgradeNumber} purchased successfully! Click value increased to ${newClickValue} points.`);
    } else {
      // Notify the user if they don't have enough points to purchase the upgrade
      alert('Insufficient points to purchase this upgrade.');
    }
  }
  