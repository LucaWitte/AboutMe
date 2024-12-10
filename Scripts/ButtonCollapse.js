function toggleCollapse(button) {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
    button.textContent = content.style.display === "block" ? "Hide Details" : "Program Details";
}
