// Register ScrollTrigger plugin for GSAP
gsap.registerPlugin(ScrollTrigger);

// Scroll animation for the first image
gsap.from(".first-image", {
    scrollTrigger: {
        trigger: ".first-image",  // Element that triggers the animation
        start: "top 80%",          // When the top of the element reaches 80% of the viewport height
        end: "top 30%",            // When the top of the element reaches 30% of the viewport height
        scrub: true,               // Smooth scrubbing of the animation
    },
    opacity: 0,                  // Initial opacity (invisible)
    x: -200,                     // Initial horizontal position (off to the left)
    duration: 1                  // Duration of the animation
});

// Scroll animation for the second image
gsap.from(".second-image", {
    scrollTrigger: {
        trigger: ".second-image",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
    },
    opacity: 0,
    x: -200,
    duration: 1
});

// Scroll animation for the third image
gsap.from(".third-image", {
    scrollTrigger: {
        trigger: ".third-image",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
    },
    opacity: 0,
    x: -200,
    duration: 1
});

// Fade In Effect for "Join Us" image
gsap.from(".join-image", {
    scrollTrigger: {
        trigger: ".join-image",  // The element to trigger the animation
        start: "top 80%",         // When the top of the element reaches 80% of the viewport height
        end: "top 30%",           // When the top of the element reaches 30% of the viewport height
        scrub: true               // Smooth scrubbing for the animation
    },
    opacity: 0,                // Initial opacity (invisible)
    y: 50,                     // Initial vertical position (below the screen)
    duration: 1,               // Duration of the animation
});

// Slide Up Effect for Text in "Join Us" Section
gsap.from(".join-text", {
    scrollTrigger: {
        trigger: ".join-text",   // The element to trigger the animation
        start: "top 80%",         // When the top of the element reaches 80% of the viewport height
        end: "top 30%",           // When the top of the element reaches 30% of the viewport height
        scrub: true               // Smooth scrubbing for the animation
    },
    y: 100,                    // Slide from below the screen
    opacity: 0,                // Initial opacity (invisible)
    duration: 1                // Duration of the animation
});

// Text typing animation for the "Join Us" heading
const joinHeading = "What are you waiting for?";
let j = 0;

function typeJoinHeading() {
    if (j < joinHeading.length) {
        document.getElementById("joinHeader").innerHTML += joinHeading.charAt(j); // Add each character
        j++;  // Move to the next character
        setTimeout(typeJoinHeading, 70); // Delay between each character
    }
}

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("joinHeader");

    // Ensure the heading is initially empty
    target.innerHTML = "";

    // Create an intersection observer to trigger typing animation when the element is fully visible
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(typeJoinHeading, 300); // Start typing after a slight delay when the element is visible
                observer.unobserve(target); // Stop observing after the animation runs once
            }
        });
    }, {
        threshold: 1.0 // 100% of the element should be visible to trigger the animation
    });

    observer.observe(target); // Start observing the target element
});
