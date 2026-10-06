const video = document.getElementById('tubiVideo');
const videoBtn = document.getElementById('videoPlayBtn');

// Play video when user clicks the play button
videoBtn.addEventListener('click', () => {
    video.play();
    videoBtn.style.display = 'none';
});

// Show play button again when video ends
video.addEventListener('ended', () => {
    videoBtn.style.display = 'flex';
});

// Toggle play/pause by clicking on the video player itself
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        videoBtn.style.display = 'none';
    } else {
        video.pause();
        videoBtn.style.display = 'flex';
    }
});