// Select all li descendants of .cool class
const triggers = document.querySelectorAll('.cool > li');

// Grab dropdown background div
const background = document.querySelector('.dropdownBackground');

// Grab the nav
const nav = document.querySelector('.top');

// Add class to show dropdown content
function handleEnter() {
  // Add 'trigger-enter' class to li
  this.classList.add('trigger-enter');
  // Add 'trigger-enter-active' class after 150 ms
  setTimeout(() => this.classList.add('trigger-enter-active'), 150); // arrow function -> 'this' is inherited from parent
}

function handleLeave() {
  console.log('LEAVEEE');
}

// Listen for mouseenter and leave on each of triggers and fire functions as a response
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseleave', handleLeave)
);
