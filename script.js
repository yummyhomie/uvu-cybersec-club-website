function updateTimer() {
    const now = new Date();
    const targetDate = new Date();

    // Calculate days until next Tuesday
    const daysUntilNextTuesday = (2 + 7 - targetDate.getDay()) % 7;
    targetDate.setDate(targetDate.getDate() + daysUntilNextTuesday);

    // Set the target time to 7pm
    targetDate.setHours(19, 0, 0, 0);

    // Calculate the time difference
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        // If the target time has already passed for this week, move to next week
        targetDate.setDate(targetDate.getDate() + 7);
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const timerElement = document.getElementById("timer");
    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    setTimeout(updateTimer, 1000); // Update every second
}

updateTimer(); // Initial call to start the countdown
