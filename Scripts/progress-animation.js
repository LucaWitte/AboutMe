document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar div");

    const handleScroll = () => {
        progressBars.forEach((bar) => {
            const barPosition = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Check if the progress bar is in the viewport
            if (barPosition < windowHeight && bar.dataset.animated !== "true") {
                const targetPercentage = bar.getAttribute("data-percentage");
                bar.style.setProperty("--target-percentage", `${targetPercentage}%`);
                bar.style.width = `${targetPercentage}%`;
                bar.dataset.animated = "true"; // Mark as animated to prevent retrigger
            }
        });
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Initial check in case the section is already in view
    handleScroll();
});
