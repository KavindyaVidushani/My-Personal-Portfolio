// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Animate skill bars on scroll
const skillFills = document.querySelectorAll('.skill-fill');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.style.width;
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillFills.forEach(fill => {
    const targetWidth = fill.style.width;
    fill.style.width = '0%';
    fill.dataset.target = targetWidth;
    observer.observe(fill);
});

// Restore width when observed
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.target;
        }
    });
}, { threshold: 0.3 });

skillFills.forEach(fill => {
    skillObserver.observe(fill);
});