// Custom Cursor Movement
const cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Glitch Text Animation
gsap.from(".glitch", {
    duration: 0.5,
    y: -20,
    opacity: 0,
    ease: "power2.inOut",
    stagger: 0.1,
    delay: 0.5,
});

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

// Project Card Hover Effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.1, rotationY: 10, rotationX: -5, boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.5)", duration: 0.3, ease: "power2.out" });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, rotationY: 0, rotationX: 0, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", duration: 0.3, ease: "power2.out" });
    });
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        gsap.to(window, { scrollTo: target.offsetTop, duration: 1, ease: "power2.inOut" });
    });
});

// Audio on Hover (Optional)
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const audio = new Audio('hover-sound.mp3');
        audio.play();
    });
});
