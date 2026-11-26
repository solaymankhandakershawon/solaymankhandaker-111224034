// 1. Light / Dark Mode Toggle
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});

// 2. Greeting Message Button
const greetBtn = document.getElementById("greet-btn");
const greetMessage = document.getElementById("greet-message");

greetBtn.addEventListener("click", function () {
    greetMessage.textContent = "Assalamu Alaikum! Thank you for visiting my portfolio website.";
});