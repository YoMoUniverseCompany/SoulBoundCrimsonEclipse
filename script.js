// 4-Tier Environment & Video Switcher (Morning, Afternoon, Evening, Night)
function updateGameEnvironment() {
    const bgVideo = document.getElementById('bg-video');
    const now = new Date();
    const hours = now.getHours();

    let videoSrc = "";

    // 1. Morning Time (6 AM to 11 AM) -> सुबह का ताज़ा सीन, हल्की वाइट रोशनी और साफ आसमान
    if (hours >= 6 && hours < 12) {
        videoSrc = "morning_aquaria.mp4"; 
    } 
    // 2. Afternoon Time (12 PM to 4 PM) -> दोपहर का तेज और चमकदार सीन
    else if (hours >= 12 && hours < 17) {
        videoSrc = "afternoon_aquaria.mp4";
    }
    // 3. Evening / Sunset (5 PM to 7 PM) -> शाम का सनसेट, आधा लाल और सफेद चाँद
    else if (hours >= 17 && hours < 20) {
        videoSrc = "sunset_aquaria.mp4";
    } 
    // 4. Night Time (8 PM to 5 AM) -> रात का डार्क सीन और बड़ा सा लाल चाँद (Crimson Eclipse)
    else {
        videoSrc = "night_aquaria.mp4";
    }

    if (bgVideo && !bgVideo.src.includes(videoSrc)) {
        bgVideo.src = videoSrc;
        bgVideo.load();
        bgVideo.play().catch(e => console.log("Autoplay waiting for user interaction: ", e));
    }
}

updateGameEnvironment();
setInterval(updateGameEnvironment, 60000);
