// Countdown Function
function startCountdown() {
    const countdownElement = document.getElementById('countdown-timer');
    
    const eventDate = new Date('2026-09-01T23:59:59').getTime();

    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000)) / 1000);

        countdownElement.innerHTML = 
            (hours < 10 ? '0' + hours : hours) + ":" + 
            (minutes < 10 ? '0' + minutes : minutes) + ":" + 
            (seconds < 10 ? '0' + seconds : seconds);

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Event started!";
        }
    }, 1000);
}

window.addEventListener('load', function() {
    startCountdown();
});

