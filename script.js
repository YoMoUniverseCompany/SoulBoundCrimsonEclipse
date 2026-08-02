// Real-time Environment Syncing
function updateWorldTime() {
    const timeBadge = document.getElementById('world-time-text');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    let environment = "DAYTIME";
    if (hours >= 17 && hours < 20) {
        environment = "SUNSET / ECLIPSE DUSK";
    } else if (hours >= 20 || hours < 6) {
        environment = "NIGHT TIME";
    }

    if (timeBadge) {
        timeBadge.innerText = `WORLD TIME: ${environment} (${formattedHours}:${minutes} ${ampm})`;
    }
}

// Initial Sync
updateWorldTime();
setInterval(updateWorldTime, 60000);

// Play Trailer Button Interactive Alert
document.getElementById('play-trailer-btn')?.addEventListener('click', () => {
    alert('SoulBound Crimson Eclipse Official Trailer Coming Soon!');
});
