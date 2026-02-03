const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const loveSound = document.getElementById('loveSound');

yesBtn.addEventListener('click', async () => {
    message.textContent = "Yay! You made my day! 💖";
    document.body.style.background = "#ffb6c1";
    
    try {
        loveSound.currentTime = 0;
        await loveSound.play();
    } catch(e) {}
    
    createHearts();
});

noBtn.addEventListener('mouseenter', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// 🔥 ADD THIS FUNCTION — MISSING FROM YOUR CODE
function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        
        heart.style.cssText = `
            position: fixed !important;
            left: ${Math.random() * window.innerWidth}px !important;
            top: -50px !important;
            font-size: ${Math.random() * 30 + 10}px !important;
            pointer-events: none !important;
            z-index: 999999 !important;
            color: white !important;
            text-shadow: 0 0 10px #ff1493 !important;
            filter: drop-shadow(0 0 8px rgba(255,20,147,0.9)) !important;
        `;

        const duration = 3 + Math.random() * 2;
        heart.style.transition = `transform ${duration}s linear, opacity ${duration}s linear`;

        document.documentElement.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = '0';
        }, 50 + i * 10);

        setTimeout(() => heart.remove(), (duration + 1) * 1000);
    }
}
