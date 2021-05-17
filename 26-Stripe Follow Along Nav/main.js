// Select all li descendants of .cool class
const triggers = document.querySelectorAll('.cool > li');

// Grab dropdown background div
const background = document.querySelector('.dropdownBackground');

// Grab the nav
const nav = document.querySelector('.top');

//
function handleEnter() {
  console.log('ENTER');
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
