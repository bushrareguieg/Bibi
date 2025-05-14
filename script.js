window.onload = function() {
    const music = document.getElementById("backgroundMusic");
    music.volume = 0.5;
    music.play().catch(() => {
        // If autoplay is blocked, wait for user interaction
        document.body.addEventListener("click", () => {
            music.play();
        }, { once: true });
    });

    // Reveal the apology message
    setTimeout(() => {
        document.querySelector(".message").style.opacity = 1;
        document.getElementById("textMessage").innerText = 
            "I am sorry, my love.\nI love you more than words can say.";
            "I’ve been thinking a lot about what you said, and it really touched me. I’m so sorry if it feels like we’ve been distant lately, like two mountains standing far apart. I never want you to feel that way.\n\n" +
            "Please know that no matter how far it seems, you’re always close to my heart.I want to make sure you always feel my love, no matter the distance.\n\n" +
            "Let’s bridge that gap, just the two of us, and bring back that closeness we cherish. I miss you, and I promise I’ll do better.";
    }, 2000);
};