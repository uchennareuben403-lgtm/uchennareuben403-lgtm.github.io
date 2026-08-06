document.querySelectorAll(".movie-card").forEach(card => {
    card.addEventListener("click", () => {
        alert("Movie selected!");
    });
});