const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hands = document.querySelectorAll('.hand');

function setDate() {
  const now = new Date();

  // Converting seconds to degrees of how to position second hand
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Converting mins to degrees of how to position mins hand
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  // Converting hours to degrees of how to position second hand
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(hours);

  // Remove transition if seconds reach 0 to avoid transitioning the hands backwards
  if (seconds === 0) {
    hands.forEach((hand) => (hand.style.transition = 'none'));
  }
}

// Runs setDate every 1 second
setInterval(setDate, 1000);
