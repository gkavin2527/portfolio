// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".about-image img", {
//   y: 100,
//   opacity: 0,
//   duration: 1,
//   ease: "power3.out",
//   scrollTrigger: {
//     trigger: ".about-me",
//     start: "top 80%",
//     toggleActions: "play none none reverse"
//   }
// });

// gsap.from(".about-text h2, .about-text h4, .about-text p, .about-buttons a", {
//   y: 40,
//   opacity: 0,
//   duration: 0.8,
//   stagger: 0.2,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".about-text",
//     start: "top 85%",
//     toggleActions: "play none none reverse"
//   }
// });


// GSAP animations on load
gsap.from(".left-content img", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
  
  gsap.from(".right-content h1", {
    y: 50,
    opacity: 0,
    delay: 0.3,
    duration: 1,
    ease: "power3.out"
  });
  
  gsap.from(".right-content p", {
    y: 30,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });
  
  gsap.from(".contact-info", {
    y: 20,
    opacity: 0,
    delay: 1,
    duration: 1,
    ease: "power3.out"
  });
  