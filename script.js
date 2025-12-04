document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default jump
        let target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});