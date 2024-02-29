document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the high score from local storage
    const highScore = localStorage.getItem('highScore');

    // Check if high score exists and update the table row
    if (highScore) {
        const tableBody = document.querySelector('#score-table tbody');
        const newRow = `
            <tr>
                <td>1</td>
                <td>Your Name</td>
                <td>${highScore}</td>
                <td>${new Date().toLocaleDateString()}</td>
            </tr>
        `;
        tableBody.innerHTML = newRow;
    }
});
