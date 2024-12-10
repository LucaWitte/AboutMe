document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar div");

    const animateProgress = (bar) => {
        const targetPercentage = parseInt(bar.getAttribute("data-percentage"), 10);
        let currentPercentage = 0;
        const animationDuration = 1500; // Animation duration in milliseconds
        const incrementStep = targetPercentage / (animationDuration / 16); // Approx. 60 FPS

        const incrementNumber = () => {
            if (currentPercentage < targetPercentage) {
                currentPercentage = Math.min(currentPercentage + incrementStep, targetPercentage);
                bar.style.width = `${currentPercentage}%`;
                bar.textContent = `${Math.round(currentPercentage)}%`;
                requestAnimationFrame(incrementNumber);
            }
        };

        incrementNumber();
    };

    const handleScroll = () => {
        progressBars.forEach((bar) => {
            const barPosition = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (barPosition < windowHeight && bar.dataset.animated !== "true") {
                animateProgress(bar);
                bar.dataset.animated = "true";
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on load in case the element is already visible
});
