// Basic GSAP animation for intro text
gsap.from("#intro h1", { duration: 1, y: -100, opacity: 0, ease: "power2.out" });
gsap.from("#intro p", { duration: 1, y: 100, opacity: 0, ease: "power2.out", delay: 0.5 });

// Scroll-triggered animations for sections
gsap.utils.toArray(".section").forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    });
});

// Project card hover animations
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.1, boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.5)", duration: 0.3, ease: "power2.out" });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", duration: 0.3, ease: "power2.out" });
    });
});

// Intro background animation (parallax effect)
gsap.to("#intro", {
    backgroundPosition: "50% 50%",
    scrollTrigger: {
        trigger: "#intro",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    ease: "none"
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        gsap.to(window, { scrollTo: target.offsetTop, duration: 1, ease: "power2.inOut" });
    });
});

// Fade-in effect for project images
gsap.utils.toArray(".project-card img").forEach((img) => {
    gsap.from(img, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: img,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
});

// Staggered animation for project titles
gsap.utils.toArray(".project-card h3").forEach((title) => {
    gsap.from(title, {
        opacity: 0,
        y: 10,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: title,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
        }
    });
});

// Contact form submit button hover animation
const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('mouseenter', () => {
    gsap.to(submitButton, { scale: 1.1, backgroundColor: "#ff6600", duration: 0.2, ease: "power2.out" });
});

submitButton.addEventListener('mouseleave', () => {
    gsap.to(submitButton, { scale: 1, backgroundColor: "#ff4500", duration: 0.2, ease: "power2.out" });
});
