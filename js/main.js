// Main JavaScript for Margarita's Kitchen

document.addEventListener('DOMContentLoaded', function() {
    // Enhanced hover effects for product container
    const productContainer = document.querySelector('.product-container');
    if (productContainer) {
        productContainer.addEventListener('mouseenter', function() {
            // Add a subtle glow effect
            this.style.filter = 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))';
        });
        
        productContainer.addEventListener('mouseleave', function() {
            // Remove glow effect
            this.style.filter = 'none';
        });
    }
    
    // Add hover effects to social media links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add smooth scrolling for any anchor links
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
}); 