
          window.addEventListener('DOMContentLoaded', function() {
            const navbar = document.querySelector('.navbar');
            
            function handleScroll() {
              const scrollTop = window.scrollY;
              
              if (scrollTop > 50) {
                navbar.classList.add('scrolled');
              } else {
                navbar.classList.remove('scrolled');
              }
            }
            
            window.addEventListener('scroll', handleScroll);
          });
       