// Check if the user's name is already stored in localStorage
const storedName = localStorage.getItem('userName');

// If the user's name is stored, populate the input field with the stored name
if (storedName) {
    document.getElementById('username').value = storedName;
}

// Function to handle form submission
function saveName() {
    // Get the value of the input field
    const name = document.getElementById('username').value;

    // Store the user's name in localStorage
    localStorage.setItem('userName', name);
}