let countdown;

// Grab selectors
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

// Create timer function
function timer(seconds) {
  // Clear any existing timers
  clearInterval(countdown);

  // Figure out when the timer started
  const now = Date.now();
  // Then is the time the timer will stop
  // now is in milliseconds, so multiply by 1000 to get in milliseconds
  const then = now + seconds * 1000;

  // This one will run IMMEDIATELY
  displayTimeLeft(seconds);

  // Display end time of when timer ends on page
  displayEndTime(then);

  // Display the countdown function counting down
  countdown = setInterval(() => {
    // Every second, figure out how much time is left in seconds
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // Check if we should stop it (prevent from going negative)
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    // This one will run after a second
    displayTimeLeft(secondsLeft);
  });
}

// To account for setInterval not running RIGHT away
function displayTimeLeft(seconds) {
  // Convert to minutes
  const minutes = Math.floor(seconds / 60);

  // Calculate time left
  const remainderSeconds = seconds % 60;

  // Display time remaining on page
  const display = `${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
}

// Function that displays end time
function displayEndTime(timestamp) {
  // Create new Date object from time stamp
  const end = new Date(timestamp);

  let hour = end.getHours(); // get hours
  const minutes = end.getMinutes(); // get minutes
  let adjustedHour = hour === 0 ? '12' : hour;

  endTime.textContent = `Timer ends at ${
    hour > 12 ? hour - 12 : adjustedHour
  }:${minutes < 10 ? '0' : ''}${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
}

// Function that starts the timer for each button clicked
function startTimer() {
  // Each button comes with data-time that is a string of the number of minutes
  const seconds = parseInt(this.dataset.time); // convert to number
  timer(seconds); // start timer
}

// For each button, listen for 'startTimer' click
buttons.forEach((button) => {
  button.addEventListener('click', startTimer);
});
