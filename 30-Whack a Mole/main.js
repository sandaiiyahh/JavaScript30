const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole;
let timeUp = false; // determine when to stop moles from peeping

// Function that gives us random amount of milliseconds
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Function that picks random hole for mole to pop out of
function randomHole(holes) {
  // Amount of holes: 6
  // Find a random index between 0 and 5
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  // Edge case: If random is same as previous random #, run it again (recursion)
  if (hole === lastHole) {
    return randomHole(holes);
  }

  // Save the previous hole
  lastHole = hole;
  return hole;
}

// Function that makes moles pop up and disappear
function peep() {
  // Get random hole and random amount of time
  const time = randomTime(200, 1000); // Between 200 milliseconds and 1 second
  const hole = randomHole(holes);

  // Take hole and add 'up' class to it (animate mole in)
  hole.classList.add('up');

  // Make mole disappear after time is ran
  setTimeout(() => {
    hole.classList.remove('up');
    // Only runs again if timeUp is set to false
    if (!timeUp) peep();
  }, time);
}
