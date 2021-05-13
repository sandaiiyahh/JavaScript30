const nav = document.querySelector('#main');

// Runs every single time the page scrolls
function fixNav() {
  // Grab where top of nav is
  const topOfNav = nav.offsetTop;
  // At the point where scroll is at the nav, make the navbar fixed
  if (window.scrollY >= topOfNav) {
    document.body.classList.add('fixed-nav'); // add to body so you can always target its children
  } else {
    document.body.classList.remove('fixed-nav');
  }
}

// Listen for scroll
window.addEventListener('scroll', fixNav);
