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
    
    // Smooth scroll with offset for anchor links
    // This will offset scroll by 60px from the top for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                const offset = 100; // Change this value to match your navbar height
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
    
    // Fade-in effect for the about section
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
      aboutSection.classList.add('fade-in-init');
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      observer.observe(aboutSection);
    }
});


// Initialize Masonry after images load
window.addEventListener('load', () => {
  const grid = document.querySelector('.grid');
  new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: 10,
    percentPosition: true
  });
});