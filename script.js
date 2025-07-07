// Wrap all code in a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Check if elements exist before adding event listeners
    function safeQuerySelector(selector) {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`Element not found: ${selector}`);
        }
        return element;
    }

    // Nav Links Animation with error handling
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

    

    gsap.from("nav", {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });




    // Color Change Animation with error handling
    function ColorChangeAnimation() {
        var Passion1 = safeQuerySelector('.herobox .passion_1 a');
        var Passion2 = safeQuerySelector('.herobox .passion_2 a');
        var Passion1Outline = safeQuerySelector('.herobox .passion_1_outline a');
        var Passion2Outline = safeQuerySelector('.herobox .passion_2_outline');

        if (!Passion1 || !Passion2 || !Passion1Outline || !Passion2Outline) {
            console.warn("One or more passion elements not found for color change animation");
            return;
        }

        Passion2.addEventListener('mouseenter', function() {
            Passion1.style.color = "transparent";
            Passion2.style.color = "#191919";
            Passion1Outline.style.display = "none";
            Passion2Outline.style.opacity = "100%";
        });
        
        Passion2.addEventListener('mouseleave', function() {
            Passion2.style.color = "transparent";
            Passion1.style.color = "#191919";
            Passion1Outline.style.display = "block";
            Passion2Outline.style.opacity = "0%";
        });
    }

    // Hero Box Image Movement with error handling
    function heroboxImageMoves() {
        var image = safeQuerySelector(".herobox_image img");

        if (!image) {
            console.warn("Hero box image not found");
            return;
        }

        // Only add mousemove event on non-touch devices
        if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
            window.addEventListener("mousemove", function(dets) {
                var xDirection = dets.clientX;
                var yDirection = dets.clientY;
                
                image.style.left = 1 - xDirection * 0.02 + "px";
                image.style.top = 1 - yDirection * 0.02 + "px";
            });
        }
    }

    // Cursor Moving Animation with error handling
    function cursorMovingAnimation() {
        var cursor = safeQuerySelector(".cursor");
        if (!cursor) {
            console.warn("Cursor element not found");
            return { enableCursor: function() {} }; // Return dummy function
        }

        // Only initialize cursor for non-touch devices
        if ('ontouchstart' in window || navigator.maxTouchPoints) {
            cursor.style.display = 'none';
            return { enableCursor: function() {} };
        }

        var Passion1 = safeQuerySelector('.herobox .passion_1 a');
        var Passion2 = safeQuerySelector('.herobox .passion_2 a');
        var intro = safeQuerySelector('.herobox .intro');
        var heroboxImage = safeQuerySelector('.herobox_image');
        var heroboxImageImg = safeQuerySelector('.herobox_image img');

        var cursorEnabled = false;

        window.addEventListener("mousemove", function(dets) {
            cursor.style.left = dets.pageX + "px";
            cursor.style.top = dets.pageY + "px";
        });

        function enableCursor() {
            cursorEnabled = true;
        }

        function showCursor() {
            if (cursorEnabled) {
                gsap.to(cursor, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.2,
                });
            }
        }

        function hideCursor() {
            if (cursorEnabled) {
                gsap.to(cursor, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.2,
                });
            }
        }

        if (Passion1) {
            Passion1.addEventListener('mouseenter', showCursor);
            Passion1.addEventListener('mouseleave', hideCursor);
        }

        if (Passion2) {
            Passion2.addEventListener('mouseenter', showCursor);
            Passion2.addEventListener('mouseleave', hideCursor);
        }

        if (intro) {
            intro.addEventListener('mouseenter', showCursor);
            intro.addEventListener('mouseleave', hideCursor);
        }

        if (heroboxImage) {
            heroboxImage.addEventListener('mouseenter', showCursor);
            heroboxImage.addEventListener('mouseleave', hideCursor);
        }

        if (heroboxImageImg) {
            heroboxImageImg.addEventListener('mouseenter', showCursor);
            heroboxImageImg.addEventListener('mouseleave', hideCursor);
        }

        return {
            enableCursor: enableCursor
        };
    }

    // Loader Animation with error handling
    function LoaderAnimation() {
        var loaderWrapper = safeQuerySelector(".loader_wrapper");
        if (!loaderWrapper) {
            console.warn("Loader wrapper not found");
            return;
        }

        window.addEventListener("load", function() {
            var navbar = safeQuerySelector("nav");
            var leftScreen = safeQuerySelector(".left_screen");
            var rightScreen = safeQuerySelector(".right_screen");
            var loaderLogo = safeQuerySelector(".loading_logo");
            
            if (!navbar || !leftScreen || !rightScreen || !loaderLogo) {
                console.warn("One or more loader elements not found");
                loaderWrapper.style.display = "none";
                return;
            }

            var tl = gsap.timeline({
                onComplete: function() {
                    loaderWrapper.style.display = "none";
                    
                    setTimeout(function() {
                        var cursorController = cursorMovingAnimation();
                        if (cursorController && cursorController.enableCursor) {
                            cursorController.enableCursor();
                        }
                    }, 2000);
                    
                    // Initialize animations only if elements exist
                    if (navbar) {
                        gsap.to(navbar, {
                            y: 100,
                            duration: 1
                        });
                    }
                    
                    animateIfExists(".herobox .intro", { opacity: 1, duration: 1 });
                    animateIfExists(".herobox .passion_1", { opacity: 1, duration: 1 });
                    animateIfExists(".herobox .passion_2", { opacity: 1, duration: 1 });
                    animateIfExists(".herobox .passion_1_outline", { opacity: 1, duration: 1 });
                    animateIfExists(".herobox_image", { opacity: 1, duration: 1 });
                    animateIfExists(".herobox p", { x: "18%", opacity: 1, duration: 1 });
                    animateIfExists(".developer_btn", { y: "10%", opacity: 1, duration: 1 });
                    animateIfExists(".photographer_btn", { y: "10%", opacity: 1, duration: 1 });
                }
            });
            
            tl.from(leftScreen, { x: "-100%", duration: 1 }, 'a');
            tl.from(rightScreen, { x: "100%", duration: 1 }, 'a');
            tl.from(loaderLogo, { y: "100%", duration: 1 });
            tl.to(loaderLogo, { y: "100%", duration: 1, delay: 1 });
            tl.to(leftScreen, { x: "-100%", duration: 1, delay: 1 }, 'b');
            tl.to(rightScreen, { x: "100%", duration: 1, delay: 1 }, 'b');
        });
    }

    // Helper function to animate if element exists
    function animateIfExists(selector, animationProps) {
        const element = document.querySelector(selector);
        if (element) {
            gsap.to(element, animationProps);
        }
    }

    // Initialize all functions
    navLinksAnimation();
    ColorChangeAnimation();
    heroboxImageMoves();
    LoaderAnimation();
});

