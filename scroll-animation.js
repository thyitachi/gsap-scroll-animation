// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// Function to handle the scroll animation
function setupScrollAnimation() {
    // Clear any existing ScrollTriggers to prevent duplicates
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Check if the viewport is wider than 992px
    if (window.innerWidth >= 992) {
        gsap.to(".banner", {
            scrollTrigger: {
                trigger: ".banner",
                start: "top top",
                end: "30vh top",
                toggleActions: "play reverse play reverse",
                onEnter: () => {
                    gsap.set(".banner", { display: "none" });
                    gsap.set(".nav_logo_wrap", { display: "block" });
                },
                onLeaveBack: () => {
                    gsap.set(".banner", { display: "block" });
                    gsap.set(".nav_logo_wrap", { display: "none" });
                }
            }
        });
    } else {
        // Ensure the banner is hidden and nav_logo_wrap is shown for smaller viewports
        gsap.set(".banner", { display: "none" });
        gsap.set(".nav_logo_wrap", { display: "block" });
    }
}

// Initialize the scroll animation
setupScrollAnimation();

// Reinitialize on window resize
window.addEventListener('resize', setupScrollAnimation);
