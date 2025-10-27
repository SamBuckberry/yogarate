// Progressive enhancements
document.documentElement.classList.add('js');

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('active');
  });
  
  // Close menu when clicking a link
  nav.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    // Skip if it's just "#" or empty
    if (href === '#' || href === '#home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const targetId = href.substring(1);
    const target = document.getElementById(targetId);
    
    if (target) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL without jumping
      history.pushState(null, null, href);
    }
  });
});

