function startCountdown() {
    const countdownElement = document.getElementById('countdown-timer');

    // Set the event date (Year, Month - 1, Day, Hours, Minutes, Seconds)
    const eventDate = new Date('2026-08-31T23:59:59').getTime(); // Example: December 31, 2026

    // Update the countdown every second
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        // Time calculation constants
        const yearInMilliseconds = 1000 * 60 * 60 * 24 * 365.25; // Approximate length of a year, considering leap years
        const monthInMilliseconds = 1000 * 60 * 60 * 24 * 30; // Approximate length of a month
        const dayInMilliseconds = 1000 * 60 * 60 * 24;
        const hourInMilliseconds = 1000 * 60 * 60;
        const minuteInMilliseconds = 1000 * 60;
        const secondInMilliseconds = 1000;

        // Calculate years, months, days, hours, minutes, and seconds
        const years = Math.floor(timeLeft / yearInMilliseconds);
        const months = Math.floor((timeLeft % yearInMilliseconds) / monthInMilliseconds);
        const days = Math.floor((timeLeft % monthInMilliseconds) / dayInMilliseconds);
        const hours = Math.floor((timeLeft % dayInMilliseconds) / hourInMilliseconds);
        const minutes = Math.floor((timeLeft % hourInMilliseconds) / minuteInMilliseconds);
        const seconds = Math.floor((timeLeft % minuteInMilliseconds) / secondInMilliseconds);

        // Display the result
        countdownElement.innerHTML =
            (years < 10 ? '0' + years : years) + " years, " +
            (months < 10 ? '0' + months : months) + " months, " +
            (days < 10 ? '0' + days : days) + " days, " +
            (hours < 10 ? '0' + hours : hours) + ":" +
            (minutes < 10 ? '0' + minutes : minutes) + ":" +
            (seconds < 10 ? '0' + seconds : seconds);

        // If the countdown is
