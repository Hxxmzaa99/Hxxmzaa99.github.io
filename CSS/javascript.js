function startCountdown() {
    const countdownElement = document.getElementById('countdown-timer');

    // Set the event date (Year, Month - 1, Day, Hours, Minutes, Seconds)
    const eventDate = new Date('2026-12-31T23:59:59').getTime(); // Example date

    // Update the countdown every second
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        // Calculate time components
        const totalSecondsLeft = Math.floor(timeLeft / 1000);
        const years = Math.floor(totalSecondsLeft / (3600 * 24 * 365.25));
        const months = Math.floor((totalSecondsLeft % (3600 * 24 * 365.25)) / (3600 * 24 * 30));
        const days = Math.floor((totalSecondsLeft % (3600 * 24 * 30)) / (3600 * 24));
        const hours = Math.floor((totalSecondsLeft % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSecondsLeft % 3600) / 60);
        const seconds = totalSecondsLeft % 60;

        // Display the result
        countdownElement.innerHTML =
            (years < 10 ? '0' + years : years) + " years, " +
            (months < 10 ? '0' + months : months) + " months, " +
            (days < 10 ? '0' + days : days) + " days, " +
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
