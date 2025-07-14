document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Toggle body scroll when menu is open
        if (overlay.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.overlay-content a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
});