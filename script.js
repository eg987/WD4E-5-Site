// opens/closes hamburger menu when clicked

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