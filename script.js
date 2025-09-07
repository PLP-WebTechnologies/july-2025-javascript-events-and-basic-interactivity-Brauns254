// Part 1: Event Handling and Theme Toggle
// Toggle between light and dark mode when the button is clicked
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // Update button text based on current mode
    this.textContent = document.body.classList.contains('dark-mode') 
        ? 'Switch to Light Mode' 
        : 'Toggle Light/Dark Mode';
});

// Part 2: Interactive FAQ Section
// Add click event listeners to all FAQ questions to toggle answers
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.nextElementSibling; // Get the associated answer div
        const isVisible = answer.style.display === 'block';
        
        // Toggle visibility of the answer
        answer.style.display = isVisible ? 'none' : 'block';
        // Update button text to indicate collapse/expand
        this.textContent = isVisible 
            ? this.textContent.replace('Hide', 'Show') 
            : this.textContent.replace('Show', 'Hide') || this.textContent + ' (Hide)';
    });
});

// Part 3: Form Validation
// Select form and error/success elements
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const successMessage = document.getElementById('form-success');

// Regular expressions for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // At least 8 chars, 1 uppercase, 1 lowercase, 1 number

// Function to validate form inputs
function validateForm() {
    let isValid = true;

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    successMessage.textContent = '';

    // Validate name (not empty, at least 2 characters)
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long.';
        isValid = false;
    }

    // Validate email (matches regex)
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate password (matches regex)
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 8 characters, with 1 uppercase, 1 lowercase, and 1 number.';
        isValid = false;
    }

    return isValid;
}

// Real-time validation on input
nameInput.addEventListener('input', function() {
    if (this.value.trim().length >= 2) {
        nameError.textContent = '';
    }
});

emailInput.addEventListener('input', function() {
    if (emailRegex.test(this.value)) {
        emailError.textContent = '';
    }
});

passwordInput.addEventListener('input', function() {
    if (passwordRegex.test(this.value)) {
        passwordError.textContent = '';
    }
});

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    if (validateForm()) {
        successMessage.textContent = 'Form submitted successfully!';
        form.reset(); // Clear form
    }
});