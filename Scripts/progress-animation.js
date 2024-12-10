document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar div");

    const animateProgress = (bar) => {
        const targetPercentage = parseInt(bar.getAttribute("data-percentage"), 10);
        let currentPercentage = 0;

        const incrementNumber = () => {
            if (currentPercentage <= targetPercentage) {
                bar.textContent = `${currentPercentage}%`;
                bar.style.width = `${currentPercentage}%`;
                currentPercentage++;
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

