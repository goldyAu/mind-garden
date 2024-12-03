document.addEventListener("DOMContentLoaded", () => {
    const hoverSound = document.getElementById("hover-sound");

    // Check if the sound is loaded
    hoverSound.addEventListener("canplaythrough", () => {
        console.log("Sound is ready to play");
    });

    // Enable sound playback on hover
    const hoverElements = document.querySelectorAll(".nav-links ul li a, .about-link");

    hoverElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            hoverSound.currentTime = 0; // Reset sound to start
            hoverSound.play().catch((err) => {
                console.error("Audio playback error: ", err);
            });
        });
    });

    // Unlock audio for browsers requiring user interaction
    document.addEventListener("click", () => {
        hoverSound.play().catch(() => {
            console.log("Audio unlocked after user interaction");
        });
    }, { once: true });
});
