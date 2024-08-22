// Text Glow Animation on Scroll
gsap.from("#landing-page h1", {
    duration: 2,
    y: -50,
    opacity: 0,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: "#landing-page",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});

// Project Cards Hover Effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.1, y: -10, duration: 0.3, ease: "power2.out" });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
    });
});

// Misty Background Animation
gsap.to("#landing-page", {
    backgroundPosition: "50% 50%",
    scrollTrigger: {
        trigger: "#landing-page",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    ease: "none"
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        gsap.to(window, { scrollTo: target.offsetTop, duration: 1, ease: "power2.inOut" });
    });
});
