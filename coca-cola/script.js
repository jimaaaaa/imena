document.addEventListener('DOMContentLoaded', function() {
    // Slideshow functionality (unchanged)
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots-container');
    let currentSlide = 0;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if(index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Previous button
    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlideshow();
    });
    
    // Next button
    document.querySelector('.next-btn').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlideshow();
    });
    
    // Auto-advance slides every 5 seconds
    let slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlideshow();
    }, 5000);
    
    // Pause on hover
    const slideshow = document.querySelector('.slideshow-container');
    slideshow.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slideshow.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlideshow();
        }, 5000);
    });
    
    function updateSlideshow() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateSlideshow();
    }

    // Modified dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        let timeout;
        
        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(timeout);
            const menu = dropdown.querySelector('.dropdown-menu');
            menu.style.maxHeight = '300px';
        });
        
        dropdown.addEventListener('mouseleave', () => {
            const menu = dropdown.querySelector('.dropdown-menu');
            timeout = setTimeout(() => {
                menu.style.maxHeight = '0';
            }, 300); // 300ms delay before closing
        });
        
        // Keep menu open when hovering over it
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.addEventListener('mouseenter', () => {
            clearTimeout(timeout);
            menu.style.maxHeight = '300px';
        });
        
        menu.addEventListener('mouseleave', () => {
            timeout = setTimeout(() => {
                menu.style.maxHeight = '0';
            }, 300); // 300ms delay before closing
        });
    });
});







// Smooth scroll ფუნქცია
function smoothScroll(target, duration) {
    const startPosition = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 60; // ჰედერის სივრცე
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Ease in-out ფორმულა
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// ჰედერის ლინკებზე ჩამოსქროლვის დაყენება
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            smoothScroll(targetSection, 1000); // 1500ms = 1.5 წამი ნაზი სქროლი
        }
    });
});
