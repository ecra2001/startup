import React from 'react';

function Shop() {
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
      // Note: We are not directly manipulating the DOM here; we'll handle this in the parent component
    } else {
      // Notify the user if they don't have enough points to purchase the upgrade
      alert('Insufficient points to purchase this upgrade.');
    }
  }

  return (
    <main>
      <h2>Upgrades</h2>
      <button onClick={() => purchaseUpgrade(1)}>
        <strong>Upgrade 1:</strong>
        <span>Click Value: +5 points</span>
        <span>Cost: 50 points</span>
      </button>

      <button onClick={() => purchaseUpgrade(2)}>
        <strong>Upgrade 2:</strong>
        <span>Click Value: +10 points</span>
        <span>Cost: 100 points</span>
      </button>

      <button onClick={() => purchaseUpgrade(3)}>
        <strong>Upgrade 3:</strong>
        <span>Click Value: +20 points</span>
        <span>Cost: 200 points</span>
      </button>

      <button onClick={() => purchaseUpgrade(4)}>
        <strong>Upgrade 4:</strong>
        <span>Click Value: +50 points</span>
        <span>Cost: 500 points</span>
      </button>

      <button onClick={() => purchaseUpgrade(5)}>
        <strong>Upgrade 5:</strong>
        <span>Click Value: +100 points</span>
        <span>Cost: 1000 points</span>
      </button>
    </main>
  );
}

export default Shop;
