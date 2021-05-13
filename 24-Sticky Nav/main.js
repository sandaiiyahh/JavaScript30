const nav = document.querySelector('#main');
// Grab where top of nav is
const topOfNav = nav.offsetTop;

// Runs every single time the page scrolls
function fixNav() {
  // At the point where scroll is at the nav, make the navbar fixed
  if (window.scrollY >= topOfNav) {
    // Have to account for the CSS fixed positioning
    document.body.style.paddingTop = nav.offsetHeight + 'px'; // how tall the height of the navbar is

    document.body.classList.add('fixed-nav'); // add to body so you can always target its children
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

// Listen for scroll
window.addEventListener('scroll', fixNav);
