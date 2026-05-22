// GSAP Animation Setup
gsap.registerPlugin(ScrollTrigger);

// Reveal animations on scroll
const reveals = document.querySelectorAll('.reveal');

reveals.forEach((element) => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
        },
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: 'power3.out',
    });
});

// Header scroll effect
const header = document.getElementById('mainHeader');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formStatus = document.getElementById('formStatus');
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            formStatus.style.display = 'block';
            formStatus.style.color = '#4CAF50';
            formStatus.textContent = 'Thank you for reaching out! We\'ll get back to you soon.';
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 4 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 4000);
        } else {
            formStatus.style.display = 'block';
            formStatus.style.color = '#f44336';
            formStatus.textContent = 'Please fill in all fields.';
        }
    });
}

// Product filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const productItems = document.querySelectorAll('.product-item');

filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach((b) => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        productItems.forEach((item) => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                gsap.to(item, { opacity: 1, duration: 0.5 });
            } else {
                gsap.to(item, { opacity: 0, duration: 0.5, onComplete: () => {
                    item.style.display = 'none';
                }});
            }
        });
    });
});
