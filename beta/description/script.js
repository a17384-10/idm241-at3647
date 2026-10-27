// Video playback controls
const video = document.getElementById('tubiVideo');
const videoBtn = document.getElementById('videoPlayBtn');

if (video && videoBtn) {
    videoBtn.addEventListener('click', () => {
        video.play();
        videoBtn.style.display = 'none';
    });

    video.addEventListener('ended', () => {
        videoBtn.style.display = 'flex';
    });

    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            videoBtn.style.display = 'none';
        } else {
            video.pause();
            videoBtn.style.display = 'flex';
        }
    });
}

// "Add to My List" button interactivity with sparkly particle burst
const addBtn = document.getElementById('addBtn');

if (addBtn) {
    addBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents triggering poster clicks
        addBtn.classList.toggle('added');
        
        if (addBtn.classList.contains('added')) {
            addBtn.textContent = '✓ Added to List';
            
            const rect = addBtn.getBoundingClientRect();
            const sparkleCount = 12;
            
            for (let i = 0; i < sparkleCount; i++) {
                const sparkle = document.createElement('span');
                sparkle.classList.add('sparkle');
                
                const angle = Math.random() * Math.PI * 2;
                const distance = 40 + Math.random() * 50;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                sparkle.style.setProperty('--tx', `${tx}px`);
                sparkle.style.setProperty('--ty', `${ty}px`);
                
                sparkle.style.left = `${rect.width / 2}px`;
                sparkle.style.top = `${rect.height / 2}px`;
                
                addBtn.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 600);
            }
            
        } else {
            addBtn.textContent = 'Add to My List';
        }
    });
}