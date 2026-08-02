function updateWorldState() {
    const now = new Date();
    const hours = now.getHours();
    const bgContainer = document.getElementById('dynamic-bg');
    const timeText = document.getElementById('time-text');
    
    let state = "";
    
    // Clear previous classes
    bgContainer.classList.remove('bg-day', 'bg-evening', 'bg-night');

    // Time Detection Logic
    if (hours >= 6 && hours < 17) {
        // Day Time (6 AM to 5 PM)
        bgContainer.classList.add('bg-day');
        state = "WORLD TIME: DAYTIME ☀️";
    } else if (hours >= 17 && hours < 19) {
        // Evening / Sunset (5 PM to 7 PM)
        bgContainer.classList.add('bg-evening');
        state = "WORLD TIME: CRIMSON SUNSET 🌅";
    } else {
        // Night Time (7 PM to 6 AM)
        bgContainer.classList.add('bg-night');
        state = "WORLD TIME: ECLIPSE NIGHT 🌙";
    }

    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timeText.innerText = `${state} (${timeString})`;
}

// Run immediately and update every minute
updateWorldState();
setInterval(updateWorldState, 60000);
