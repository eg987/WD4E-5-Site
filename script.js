// opens/closes hamburger menu when clicked

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  const isOpen = menu.classList.toggle("open");
  icon.classList.toggle("open");
  
  //  tells screen readers the current state of menu open/closed
  icon.setAttribute("aria-expanded", isOpen);
}