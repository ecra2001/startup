import React, { useEffect, useState } from 'react';

function Score() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function loadScores() {
      try {
        // Get the latest high scores from the service
        const response = await fetch('/api/scores');
        const scoresData = await response.json();

        // Save the scores in case we go offline in the future
        localStorage.setItem('scores', JSON.stringify(scoresData));

        // Update state with scores data
        setScores(scoresData);
      } catch (error) {
        // If there was an error then just use the last saved scores
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
          const scoresData = JSON.parse(scoresText);
          setScores(scoresData);
        }
      }
    }

    loadScores();
  }, []);

  return (
    <main>
      <table id="score-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {scores.length ? (
            scores.map((score, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{score.name}</td>
                <td>{score.score}</td>
                <td>{score.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Be the first to score</td>
            </tr>
          )}
        </tbody>
      </table>
      <div id="quote" className="quote-box bg-light text-dark"></div>
    </main>
  );
}

export default Score;
