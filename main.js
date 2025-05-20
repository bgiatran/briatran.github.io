// main.js

// Smooth scrolling behavior for internal nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Back to top smooth scroll
document.querySelector('.back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
});
