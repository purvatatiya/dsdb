// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation (basic)
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted!');
});
