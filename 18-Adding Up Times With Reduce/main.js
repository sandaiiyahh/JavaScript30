// Select all list items to get their times
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const totalTime = document.querySelector('.total');

const seconds = timeNodes.reduce((total, currentVal) => {
  const [mins, secs] = currentVal.dataset.time.split(':');
  return total + (mins * 60 + secs * 1); // multiply by a number (1) to convert string to number
}, 0);

// Breaking up seconds into hours, minutes, seconds
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600; // gets the remainder after getting all the hours

// Use what's left of seconds and get mins off it
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60; // gets the remainder after getting all the mins

console.log(
  `Total time: ${hours < 10 ? '0' + hours : hours}:${
    mins < 10 ? '0' + mins : mins
  }:${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}`
);

totalTime.textContent = `Total time: ${hours} hours, ${mins} minutes, ${secondsLeft} seconds`;
