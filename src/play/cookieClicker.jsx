import React, { useEffect, useState } from 'react';
import { GameEvent, GameNotifier } from './gameNotifier';
import './cookieClicker.css';

function CookieClicker() {
  const [score, setScore] = useState(0);
  GameNotifier.broadcastEvent(userName, GameEvent.Start, {});
  useEffect(() => {
    // Retrieve and display the username on the page
    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = getPlayerName();
    
    // Retrieve and display the score for the current user
    const userScore = getScoreForCurrentUser();
    setScore(userScore);
  }, []);

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
    let userScore = getScoreForCurrentUser();
    const clickValue = parseInt(localStorage.getItem('clickValue')) || 1;
    userScore += clickValue;
    updateScoreForCurrentUser(userScore);
    setScore(userScore);
  }

  // Update the score for the current user in localStorage
  function updateScoreForCurrentUser(score) {
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

  return (
    <div className="flex-item">
      <div className="score-reset-container">
        <div>
          <label htmlFor="score">Score</label>
          <input type="text" className="count" id="score" value={score} readOnly />
        </div>
        <div>
          <button onClick={incrementScore}>Increment</button>
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
