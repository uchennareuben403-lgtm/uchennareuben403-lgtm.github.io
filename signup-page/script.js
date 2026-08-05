const form = document.querySelector(".signup-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const password = document.querySelectorAll("input")[2].value;
    const confirmPassword = document.querySelectorAll("input")[3].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Account created successfully!");
        form.reset();
    }
});