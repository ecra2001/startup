import React, { useState } from 'react';

function CookieClicker() {
  const [score, setScore] = useState(0);

  // Function to increment the score
  const incrementScore = () => {
    setScore(score + 1); // Increment the score by 1 for each click
  };

  return (
    <div className="flex-item">
      <div className="score-reset-container">
        <div>
          <label htmlFor="score">Score</label>
          <input type="text" className="count" id="score" value={score} readOnly />
        </div>
      </div>
      <div>
        <button className="cookie-button" onClick={incrementScore}>
          <img src="Cookie.png" alt="Cookie Image" width="300" height="300" />
        </button>
      </div>
    </div>
  );
}

export default CookieClicker;
