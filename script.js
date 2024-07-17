function updateClock() {
    const now = new Date();

    // Format the date as YYYY-MM-DD
    const date = now.toISOString().split('T')[0];

    // Format the time as HH:MM:SS
    const time = now.toTimeString().split(' ')[0];

    // Update the HTML elements
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
