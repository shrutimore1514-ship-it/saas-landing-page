const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

// Contact form validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name validation
const namePattern = /^[A-Za-z ]{2,}$/;

if (!namePattern.test(name)) {
    formMessage.style.color = "red";
    formMessage.textContent =
        "Please enter a valid name (letters only).";
    return;
}

    if (!emailPattern.test(email)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please enter a valid email.";
        return;
    }

    if (message.length < 5) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please enter a message.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Thank you! Your request is ready.";

    form.reset();
});