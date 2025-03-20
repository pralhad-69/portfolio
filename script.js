document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Display a simple alert to simulate form submission
    alert('Thank you for your message, we will get back to you soon!');

    // Optionally, reset the form fields after submission
    this.reset();
});

// Dark mode toggle functionality
// Dark mode toggle functionality
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');

    // Toggle the dark-mode class on header, sections, and form elements
    const header = document.querySelector('header');
    header.classList.toggle('dark-mode');

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.toggle('dark-mode');
    });

    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.classList.toggle('dark-mode');
    });

    const contactFormInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    contactFormInputs.forEach(input => {
        input.classList.toggle('dark-mode');
    });

    const contactFormButton = document.querySelector('#contact-form button');
    contactFormButton.classList.toggle('dark-mode');

    // Change button text based on current mode
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Toggle Light Mode'; // Change text to indicate light mode
    } else {
        this.textContent = 'Toggle Dark Mode'; // Change text to indicate dark mode
    }
});