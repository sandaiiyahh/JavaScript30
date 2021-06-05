let countdown;

// Grab selectors
const timerDisplay = document.querySelector('.display__time-left');

// Create timer function
function timer(seconds) {
  // Figure out when the timer started
  const now = Date.now();
  // Then is the time the timer will stop
  // now is in milliseconds, so multiply by 1000 to get in milliseconds
  const then = now + seconds * 1000;

  // This one will run IMMEDIATELY
  displayTimeLeft(seconds);

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

  console.log(seconds);
}
