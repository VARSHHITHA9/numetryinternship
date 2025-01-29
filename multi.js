// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("multiStepForm");
    const steps = form.querySelectorAll(".step");
    const nextButtons = form.querySelectorAll(".next");
    const prevButtons = form.querySelectorAll(".prev");
    const progressBar = document.querySelector(".progress");
    let currentStep = 0;

    // Initialize the form
    function showStep(step) {
        steps.forEach((s, index) => {
            s.classList.toggle("active", index === step);
        });

        // Update the progress bar
        const progress = ((step + 1) / steps.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Handle "Next" button clicks
    nextButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentStep++;
            showStep(currentStep);
        });
    });

    // Handle "Previous" button clicks
    prevButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentStep--;
            showStep(currentStep);
        });
    });

    // Initialize the form display
    showStep(currentStep);

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Form submitted!");
        // Add form submission logic here (e.g., send form data to a server)
    });
});
