// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
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
}

// Initialize EmailJS
(function () {
    emailjs.init("9dNcrQAkHafaSe4BB");

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.className = 'form-message error';
            return;
        }

        emailjs.sendForm("service_m9j3tr3", "template_y6dm43a", contactForm)
            .then(() => {
                formMessage.textContent = 'Message sent successfully!';
                formMessage.className = 'form-message success';
                contactForm.reset();
            })
            .catch((error) => {
                console.error(error);
                formMessage.textContent = 'Failed to send message.';
                formMessage.className = 'form-message error';
            });

        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    });
})();