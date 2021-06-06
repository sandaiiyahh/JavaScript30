const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const button = document.querySelector('button');

let lastHole;
let timeUp = false; // determine when to stop moles from peeping
let score = 0;

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

// Function that starts game
function startGame() {
  scoreBoard.textContent = 0;
  // Reset timeUp to be false again and score back to 0
  timeUp = false;
  score = 0;
  peep(); // run moles peeping again

  // After 10 seconds, set timeUp to true (game's over!)
  setTimeout(() => {
    timeUp = true;
    button.textContent = 'Game Over, start again!';
  }, 10000);
}

// Function that tracks how many moles you hit
function bonk(e) {
  // Edge case for when someone tries to fake a click
  if (!e.isTrusted) return;

  // Increase score when someone clicks on something
  score++;
  this.parentNode.classList.remove('up'); // remove 'up' class from hole
  scoreBoard.textContent = score;
}

// Listen for 'click' event on each of the moles
moles.forEach((mole) => mole.addEventListener('click', bonk));
