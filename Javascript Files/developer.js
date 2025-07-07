// Navigation links animation - Updated version
console.log("JS file is loaded");

function navLinksAnimation() {
    const navLinks = document.querySelectorAll("nav ul li a"); // Changed to target the <a> tags directly

    navLinks.forEach((link) => {
        // Clear any existing animations to prevent conflicts
        gsap.killTweensOf(link.parentElement); // Target the li element
        
        // Mouseenter animation
        link.addEventListener("mouseenter", function() {
            gsap.to(this.parentElement, { // Animate the li element
                y: -8,
                duration: 0.3,
                ease: "power2.out",
                overwrite: true // Ensure this animation takes precedence
            });
        });
        
        // Mouseleave animation
        link.addEventListener("mouseleave", function() {
            gsap.to(this.parentElement, { // Animate the li element
                y: 0,
                duration: 0.3,
                ease: "power2.out",
                overwrite: true
            });
        });
    });
}

// Initialize after page fully loads
function initAnimations() {
    // Wait for fonts and everything to load
    window.requestAnimationFrame(() => {
        navLinksAnimation();
        footerLinksAnimation();
        
        // Refresh ScrollTrigger to recalculate positions
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 300);
    });
}

// Initialize everything properly
window.addEventListener('DOMContentLoaded', initAnimations);
window.addEventListener('load', initAnimations);



  function footerLinksAnimation() {
    const footerLinks = document.querySelectorAll("footer ul li a");

    footerLinks.forEach((link) => {
      // GSAP hover animation
      link.addEventListener("mouseenter", function () {
        gsap.to(this, {
          y: -8,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      link.addEventListener("mouseleave", function () {
        gsap.to(this, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      // Add 'active' class to matching page
      const currentPath = window.location.pathname;
      if (link.href.includes(currentPath)) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("DOMContentLoaded", footerLinksAnimation);



// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Set initial states for cards (before animation)
gsap.set(".card-1", { y: -100, opacity: 0.7, scale: 0.9 });
gsap.set(".card-2", { y: 80, opacity: 0.7, scale: 0.9 });
gsap.set(".card-3", { y: 120, opacity: 0.7, scale: 0.9 });
gsap.set(".card-4", { y: 80, opacity: 0.7, scale: 0.9 });
gsap.set(".card-5", { y: -100, opacity: 0.7, scale: 0.9 });

// Create main timeline for card animations
const cardTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".card-container",
        start: "top 85%",
        end: "bottom 30%",
        scrub: 1.5,
        anticipatePin: 1
    }
});

// Add card animations to timeline with perfect synchronization
cardTimeline
    .to(".card-1, .card-5", {
        y: -30,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out"
    }, 0)
    .to(".card-2, .card-4", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out"
    }, 0.2)
    .to(".card-3", {
        y: 30,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out"
    }, 0.4)
    .to(".card-1, .card-2, .card-3, .card-4, .card-5", {
        y: "+=15",
        rotation: 0,
        duration: 0.8,
        ease: "power2.inOut"
    }, 1);

// Enhanced card hover effects
document.querySelectorAll('.card-1, .card-2, .card-3, .card-4, .card-5').forEach((card, index) => {
    // Add unique hover animation for each card
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.08,
            y: "-=20",
            rotation: index % 2 === 0 ? 2 : -2,
            duration: 0.4,
            ease: "power2.out",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
        });
        
        // Animate the image inside
        gsap.to(this.querySelector('img'), {
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            y: "+=20",
            rotation: 0,
            duration: 0.4,
            ease: "power2.out",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
        });
        
        // Reset image scale
        gsap.to(this.querySelector('img'), {
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
        });
    });
});

// Perfect hero section parallax
gsap.to(".herobox h1", {
    y: -80,
    scale: 0.95,
    opacity: 0.6,
    scrollTrigger: {
        trigger: ".herobox",
        start: "top top",
        end: "bottom top",
        scrub: 2
    }
});

gsap.to(".herobox h2", {
    y: -50,
    opacity: 0.4,
    scrollTrigger: {
        trigger: ".herobox",
        start: "top top",
        end: "bottom top",
        scrub: 2
    }
});

gsap.to(".herobox a", {
    y: -40,
    scale: 0.9,
    opacity: 0.7,
    scrollTrigger: {
        trigger: ".herobox",
        start: "top top",
        end: "bottom top",
        scrub: 2
    }
});

// Animate hero slider
gsap.to(".herobox-auto-slider", {
    y: -30,
    opacity: 0.5,
    scrollTrigger: {
        trigger: ".herobox",
        start: "top top",
        end: "bottom top",
        scrub: 1.5
    }
});

// Perfect section-1 text animations
const textTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-1",
        start: "top 70%",
        end: "top 40%",
        scrub: 1
    }
});

textTimeline
    .from(".section-1 h2", {
        y: 60,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out"
    })
    .from(".section-1 h1", {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out"
    }, "-=0.7")
    .from(".section-1 p.p1", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.5")
    .from(".section-1 p.p2", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.3");

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Performance optimization
gsap.config({
    force3D: true,
    nullTargetWarn: false
});

// ===== PERFECT HERO ANIMATIONS =====
function initHeroAnimations() {
    // Reset all elements to pre-animated state
    gsap.set(".herobox h2", { 
        y: 20, 
        opacity: 0,
        rotation: 0.5 
    });
    gsap.set(".herobox h1", { 
        y: 30, 
        opacity: 0,
        rotation: 0.5,
        scale: 0.95 
    });
    gsap.set(".herobox a", { 
        y: 20, 
        opacity: 0,
        scale: 0.9 
    });
    gsap.set(".herobox-auto-slider", { 
        y: 30, 
        opacity: 0 
    });

    // Create master timeline
    const heroTL = gsap.timeline({
        defaults: { ease: "power3.out" }
    });

    // Animate elements in perfect sequence
    heroTL
        .to(".herobox h2", {
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 1.2
        })
        .to(".herobox h1", {
            y: 0,
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 1.4
        }, "-=0.9") // Overlap with previous animation
        .to(".herobox a", {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            onStart: enableButtonHover // Enable hover effects only after animation
        }, "-=0.7")
        .to(".herobox-auto-slider", {
            y: 0,
            opacity: 1,
            duration: 1.2,
            onComplete: startLogoSlider
        }, "-=0.5");
}

// Enable button hover effects only after animation
function enableButtonHover() {
    const heroBtn = document.querySelector(".herobox a");
    if (!heroBtn) return;

    heroBtn.style.pointerEvents = "auto"; // Enable interactions only after animation
    
    heroBtn.addEventListener('mouseenter', () => {
        gsap.to(heroBtn, {
            scale: 1.05,
            backgroundColor: "#000",
            color: "#fff",
            duration: 0.3,
            overwrite: true
        });
    });
    
    heroBtn.addEventListener('mouseleave', () => {
        gsap.to(heroBtn, {
            scale: 1,
            backgroundColor: "transparent",
            color: "#000",
            duration: 0.3,
            overwrite: true
        });
    });
}

// Infinite logo slider
function startLogoSlider() {
    const slider = document.querySelector(".herobox-slider-holder");
    if (!slider) return;
    
    const items = slider.children;
    if (items.length === 0) return;
    
    const itemWidth = items[0].offsetWidth + 40;
    const totalWidth = itemWidth * items.length;
    
    gsap.to(slider, {
        x: -totalWidth/2,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
            x: x => {
                const xVal = parseFloat(x);
                return (xVal % totalWidth) + "px";
            }
        }
    });
}

// Initialize with loader support
window.addEventListener('load', () => {
    const loader = document.getElementById("page-entry-loader");
    if (loader) {
        gsap.to(loader, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
                loader.style.display = "none";
                initHeroAnimations();
            }
        });
    } else {
        initHeroAnimations();
    }
});

  

// Add resize handler for responsive behavior
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        ScrollTrigger.refresh();
    }, 250);
});

// Contact button enhanced hover effect
const contactBtn = document.querySelector('.contact_btn');
if (contactBtn) {
    contactBtn.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    contactBtn.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            boxShadow: "0 0px 0px rgba(0,0,0,0)",
            duration: 0.3,
            ease: "power2.out"
        });
    });
}

// Replace the existing line animation code with this:
gsap.to('.section-1 .line', {
    scaleX: 1,  // Changed from scale to scaleX for proper horizontal line animation
    duration: 0.5,
    scrollTrigger: {
        trigger: ".section-1 h2",
        start: "top 70%",
        end: "top 40%",  // Fixed: was "bottom" instead of "end"
        scrub: 0.3,
        // markers: true,  // Remove or comment out markers for production
        onComplete: () => {
            // Optional: Add callback when animation completes
            console.log("Line animation completed");
        }
    }
})
gsap.to('.section-1 h1',{
    opacity:"200%",
    duration:.5,
    scrollTrigger:{
        trigger:".section-1 h1",
        scrub:.3,
        start:"top 70%",
        bottom:"top 40%",
    }
})


const track = document.querySelector(".slides-holder");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");

let currentIndex = 0;
let slideWidth = 400; // Fixed slide width (slide + margin)
let totalSlides = slides.length;

// Right button
rightBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Loop back to start
    }
    moveCarousel();
});

// Left button
leftBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Loop to end
    }
    moveCarousel();
});

// Move carousel function
function moveCarousel() {
    const translateX = -currentIndex * slideWidth;
    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(${translateX}px)`;
    
    // Always keep first visible card colored
    updateActiveCard();
}

// Update active card
function updateActiveCard() {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Add active class to first visible slide
    slides[currentIndex].classList.add('active');
}

// Initial setup
moveCarousel();
updateActiveCard();


function section3(){
    gsap.to(".show-me",{
x:"5%",
scrollTrigger:{
    trigger:'.show-me',
    scrub:1,
}
    })
    gsap.to(".passions",{
x:"-5%",
scrollTrigger:{
    trigger:'.passions',
    scrub:1,
}
    })
    
}
section3()  

function section4(){
    gsap.to(".top-company1",{
        x:"45%",
        scrollTrigger:{
            trigger:'.top-company1',
            scrub:.5,
        }
            })

    gsap.to(".top-company2",{
        x:"-40%",
        scrollTrigger:{
            trigger:'.top-company2',
            scrub:.5,
        }
            })
    gsap.to(".bottom-company1",{
        x:"10%",
        scrollTrigger:{
            trigger:'.bottom-company1',
            scrub:.5,
        }
            })

    gsap.to(".bottom-company2",{
        x:"-10%",
        scrollTrigger:{
            trigger:'.bottom-company2',
            scrub:.5,
        }
            })
}
section4()


function section6(){
    gsap.to(".col-1-section-6",{
        y:"-30%",
        scrollTrigger:{
            trigger:'.col-1-section-6',
            scrub:.5,
        }
    })
}
section6()


var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

 function section7(){
gsap.to(".col-section-7",{
    y:"-30%",
    stagger:0.2,
    duration:.5,
    scrollTrigger:{
        trigger:'.col-section-7',
        scrub:1,
    }
})
 }
 section7()
