// main.js

// Smooth scroll for nav & anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Back to top
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    backToTop.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
    });
}

// Navbar shadow on scroll
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
}

// ── Scroll-reveal animations ──────────────────────────────────────────────────
function initReveal() {
    // Tag project cards individually for stagger
    document.querySelectorAll('.projects-grid .project-card').forEach(el => {
        el.classList.add('reveal');
    });
    document.querySelectorAll('.cert-card').forEach(el => {
        el.classList.add('reveal');
    });

    // More-about blocks: text from left, image from right (reversed for .reverse)
    document.querySelectorAll('.more-block').forEach(block => {
        const isReverse = block.classList.contains('reverse');
        const text  = block.querySelector('.more-text');
        const image = block.querySelector('.more-image');
        if (text)  { text.classList.add('reveal');  text.classList.add(isReverse ? 'from-right' : 'from-left'); }
        if (image) { image.classList.add('reveal'); image.classList.add(isReverse ? 'from-left'  : 'from-right'); }
    });

    // Section titles & labels
    document.querySelectorAll('.section-title, .section-label').forEach(el => {
        el.classList.add('reveal');
    });

    // About section
    document.querySelectorAll('.about-photo, .about-text').forEach((el, i) => {
        el.classList.add('reveal');
        el.classList.add(i === 0 ? 'from-left' : 'from-right');
    });

    // Observe everything
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // fire once
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Run after DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
} else {
    initReveal();
}
