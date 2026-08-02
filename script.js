// Real-Time Dynamic Environment Switcher with Time Detection
function syncDynamicEnvironment() {
    const timeBadge = document.getElementById('world-time-text');
    const bgVideo = document.getElementById('bg-video');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    let environment = "DAYTIME (AQUARIA REALM)";
    let videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-bright-sun-shining-in-a-blue-sky-41584-large.mp4"; 

    // Evening / Sunset (5 PM to 7 PM)
    if (hours >= 17 && hours < 20) {
        environment = "SUNSET (CRIMSON DUSK)";
        videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-dramatic-sunset-over-a-mountain-landscape-42900-large.mp4";
    } 
    // Night Time (8 PM to 5 AM)
    else if (hours >= 20 || hours < 6) {
        environment = "NIGHT (SOULBOUND ECLIPSE)";
        videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-time-lapse-of-the-starry-night-sky-41580-large.mp4";
    }

    if (timeBadge) {
        timeBadge.innerText = `WORLD ENVIRONMENT: ${environment} (${formattedHours}:${minutes} ${ampm})`;
    }

    if (bgVideo && bgVideo.getAttribute('src') !== videoSrc) {
        bgVideo.src = videoSrc;
        bgVideo.load();
        bgVideo.play().catch(e => console.log("Auto-play waiting for interaction: ", e));
    }
}

syncDynamicEnvironment();
setInterval(syncDynamicEnvironment, 30000);

document.getElementById('play-trailer-btn')?.addEventListener('click', () => {
    alert('SoulBound Crimson Eclipse Cinematic Trailer Loading...');
});
