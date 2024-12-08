function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener("DOMContentLoaded", () => {
    const splashElement = document.querySelector('.splash');
    const splashTexts = ["Hello world!", "Lorem ipsium", "Raccoons!", "<paste funny phrase here>", "Glory to Ukraine!", "200 OK", "funny cats video watch", "Brainrotted", "<3 <3 <3 <3", "404 Not Found", "I'm fine", "sudo rm -rf", "Goodbye world!"];
    let index = getRandomInt(splashTexts.length);

    function changeSplashText() {
        // Start fade-out animation
        splashElement.classList.add('fade-out');

        // Wait for the fade-out animation to complete
        setTimeout(() => {
            // Update text
            index = (index + 1) % splashTexts.length;
            splashElement.textContent = splashTexts[index];

            // Remove fade-out and add fade-in
            splashElement.classList.remove('fade-out');
            splashElement.classList.add('fade-in');

            // Ensure fade-in is cleaned up after playing
            setTimeout(() => {
                splashElement.classList.remove('fade-in');
            }, 500); // Matches fade-in duration
        }, 500); // Matches fade-out duration
    }

    changeSplashText();
    // Start interval to change text every 5 seconds
    setInterval(() => {
        changeSplashText();
    }, 5000);
});
