// Select all li descendants of .cool class
const triggers = document.querySelectorAll('.cool > li');

// Grab dropdown background div
const background = document.querySelector('.dropdownBackground');

// Grab the nav
const nav = document.querySelector('.top');

// Add classes to li to show dropdown content
function handleEnter() {
  // Add 'trigger-enter' class to li
  this.classList.add('trigger-enter');
  // Add 'trigger-enter-active' class after 150 ms
  // Edge case for when you hover around fast: Only show the content AFTER it has the 'trigger-enter' class on it
  setTimeout(
    () =>
      this.classList.contains('trigger-enter') &&
      this.classList.add('trigger-enter-active'),
    150
  ); // arrow function -> 'this' is inherited from parent
  // Add 'open' class to white dropdown background div
  background.classList.add('open');

  // Grab dropdown of the one that appeared after hover
  const dropdown = this.querySelector('.dropdown'); // dropdown courses vs dropdown dropdown3 vs dropdown dropdown1..

  // Get coordinates from dropdown
  const dropdownCoords = dropdown.getBoundingClientRect();

  // Get coordinates of nav as well (so dropdownCoords are in relation to nav. In case something new gets added)
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top, // offset with the nav's top (move it up by the same amount of pixels)
    left: dropdownCoords.left - navCoords.left,
  };

  // Now that we have width & height, we can set the white dropdown bg to it
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty(
    'transform',
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

// Remove classes once you hover away from li
function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  // Remove 'open' class from white dropdown background div
  background.classList.remove('open');
}

// Listen for mouseenter and leave on each of triggers and fire functions as a response
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseleave', handleLeave)
);
