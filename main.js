const roadmap = document.querySelector('.roadmap');
let speed = 4; // Initial animation duration in seconds

function increaseSpeed() {
    speed -= 0.5; // Decrease duration to speed up
    if (speed < 1) speed = 1; // Set a minimum speed limit
    roadmap.style.animation = `roadMove ${speed}s linear infinite`;
}

// Increase speed every 10 seconds
setInterval(increaseSpeed, 10000);
