const hireButton = document.querySelector(".btn");

hireButton.addEventListener("click", function () {
    alert("Thank you for your interest! You will be redirected to WhatsApp.");
});
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggle.textContent = "☀️ Light Mode";
    } else {
        toggle.textContent = "🌙 Dark Mode";
    }
});