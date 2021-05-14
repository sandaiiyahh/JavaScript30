// Select all the divs
const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  // Clicking the most inner body clicks on everything else because it wraps around it
  console.log(this.classList.value);
  e.stopPropagation(); // stop bubbling the event up (no longer trigger events on parents)
}

// Capture = true: runs on the way down (one, two, three)
divs.forEach((div) =>
  div.addEventListener('click', logText, { capture: false })
);

button.addEventListener(
  'click',
  () => {
    console.log('You clicked, but this will just log once!');
  },
  { once: true }
);
