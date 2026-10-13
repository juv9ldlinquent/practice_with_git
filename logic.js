
/* 1. Welcome message when the page loads */
window.addEventListener("load", function () {
    alert("Welcome to My Website!");
});

/* 2. Highlight the active navigation link */
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        // Remove highlight from all links
        navLinks.forEach(function (item) {
            item.style.color = "";
            item.style.fontWeight = "";
        });

        // Highlight the clicked link
        link.style.color = "blue";
        link.style.fontWeight = "bold";
    });
});

/* 3. Handle the contact form */
const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", function (event) {
    // Prevent the page from reloading
    event.preventDefault();

    // Get the form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check that all fields contain text
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Display a success message
    alert("Thank you, " + name + "! Your message has been received.");

    // Clear the form
    contactForm.reset();
});