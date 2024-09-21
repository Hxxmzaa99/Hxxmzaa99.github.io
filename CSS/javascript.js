// Countdown Function
function startCountdown() {
    const countdownElement = document.getElementById('countdown-timer');
    
    // Set the event date (Year, Month - 1, Day, Hours, Minutes, Seconds)
    const eventDate = new Date('2024-12-31T23:59:59').getTime();

    // Update the countdown every second
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        // Calculate time components (hours, minutes, seconds)
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000)) / 1000);

        // Display the result
        countdownElement.innerHTML = 
            (hours < 10 ? '0' + hours : hours) + ":" + 
            (minutes < 10 ? '0' + minutes : minutes) + ":" + 
            (seconds < 10 ? '0' + seconds : seconds);

        // If the countdown is finished, clear the interval and show a message
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Event started!";
        }
    }, 1000);
}

// Call the countdown function when the page loads
window.addEventListener('load', function() {
    startCountdown();
});

