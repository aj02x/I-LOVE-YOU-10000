// Counter to track attempts
let attemptCount = 0;

// Function to check the password and show the content
function checkPassword() {
    const enteredPassword = document.getElementById("passwordInput").value;
    const correctPassword = "100524";  // Set the password to "100524"

    // Increment attempt count on each submission
    attemptCount++;

    if (enteredPassword === correctPassword) {
        // Hide the password entry section
        document.getElementById("passwordSection").style.display = "none";  
        
        // Show the "Yay! You got it!" message
        document.getElementById("yaySection").style.display = "block";
    } else {
        document.getElementById("errorMessage").style.display = "block";    // Show error message
        if (attemptCount >= 3) {
            document.getElementById("passwordHint").style.display = "block";    // Show the hint after 3 attempts
        }
    }
}

// Function to go to the next section after clicking "Yay! You got it!"
function goToNext() {
    document.getElementById("yaySection").style.display = "none"; // Hide "Yay!" section
    document.getElementById("titleSection").style.display = "block"; // Show title section
}

// Function to show the letter content after the first click
function showLetter() {
    // Hide the title and the first "Click Here" button
    document.getElementById("titleSection").style.display = "none";

    // Show the letter section
    document.getElementById("letter").style.display = "block"; // Show the letter
}

// Function to show the Valentine's message after the letter
function showValentineMessage() {
    // Hide the letter section
    document.getElementById("letter").style.display = "none";

    // Show the final Valentine's message
    document.getElementById("valentineMessage").style.display = "block";
}

