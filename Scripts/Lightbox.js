document.addEventListener("DOMContentLoaded", () => {
    const lightboxes = document.querySelectorAll(".lightbox");

    lightboxes.forEach((lightbox) => {
        lightbox.addEventListener("click", (event) => {
            // Close the lightbox if the click is outside the content
            if (!event.target.closest(".lightbox-content")) {
                lightbox.style.display = "none";
            }
        });
    });

    document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
        thumbnail.addEventListener("click", (event) => {
            const targetId = event.target.getAttribute("onclick").match(/'(.*?)'/)[1];
            document.getElementById(targetId).style.display = "flex";
        });
    });

    const closeButtons = document.querySelectorAll(".lightbox .close");
    closeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const lightbox = event.target.closest(".lightbox");
            lightbox.style.display = "none";
        });
    });
});
