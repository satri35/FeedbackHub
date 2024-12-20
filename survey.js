
// survey.js - Enhancing feedback form interactivity

// Validate form inputs
document.querySelector('#feedback-form').addEventListener('submit', function (e) {
    const feedbackInput = document.querySelector('#feedback-text').value.trim();
    if (feedbackInput === '') {
        e.preventDefault();
        alert('Please provide your feedback before submitting.');
    }
});

// Display thank-you message
document.querySelector('#submit-button').addEventListener('click', () => {
    alert('Thank you for your feedback!');
});
