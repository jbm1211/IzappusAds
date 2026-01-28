// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and steps
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .step, .privacy-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, #fbbf24, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: sparkleAnimation 1s ease-out forwards;
    `;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnimation {
        0% {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
        100% {
            opacity: 0;
            transform: scale(0) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Track button clicks (optional analytics placeholder)
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log('Button clicked:', e.target.textContent);
        // Add analytics tracking here if needed
    });
});
