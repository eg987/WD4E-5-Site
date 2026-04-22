// opens/closes hamburger menu when clicked
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
    //or keyboard and tab users
    const isOpen = menu.classList.contains("open");
    icon.setAttribute("aria-expanded", isOpen);
    // prevents ghost tabbing
    menu.setAttribute("aria-hidden", !isOpen);
}

window.addEventListener('scroll', function() {
    // Check both body and documentElement for cross-browser support
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

function scrollToTop() {
    // FIX: Define the variable here!
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  const isOpen = menu.classList.toggle("open");
  icon.classList.toggle("open");
  
  //  tells screen readers the current state of menu open/closed
  icon.setAttribute("aria-expanded", isOpen);
}
// icons other onclick items accessible with enter or space
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevents page jumping on Space
      icon.click();       // Triggers your existing onclick function
    }
  });
});