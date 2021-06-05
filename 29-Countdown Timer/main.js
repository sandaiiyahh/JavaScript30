let countdown;

// Create timer function
function timer(seconds) {
  // Figure out when the timer started
  const now = Date.now();
  // Then is the time the timer will stop
  // now is in milliseconds, so multiply by 1000 to get in milliseconds
  const then = now + seconds * 1000;

  // Display the time left
  countdown = setInterval(() => {
    // Every second, figure out how much time is left in seconds
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // Check if we should stop it (prevent from going negative)
    if (secondsLeft < 0) {
      clearInterval(countdown);
    }

    console.log(secondsLeft);
  });
}
