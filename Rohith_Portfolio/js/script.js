// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animation for hero section
const heroContent = document.querySelector('.hero-content');
heroContent.style.opacity = '0';
heroContent.style.transition = 'opacity 1.5s ease-out';

window.addEventListener('load', () => {
    setTimeout(() => {
        heroContent.style.opacity = '1';
    }, 300);
});
