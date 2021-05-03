// Select class window area and text
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

// How many pixels text should should go at most
const walk = 30;

// Function that moves text-shadow
function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = this;
  // ClientX / ClientY gives us coordinates relative to the top-left corner of window
  // OffsetX / OffsetY gives us coordinates relative to top-left corner of parent (hero)
  let { clientX: x, clientY: y } = e; // where our cursor is at

  // Determining walk coordinates
  const xWalk = Math.round((x / width) * walk - walk / 2); // 15 is as high as we go. -15 is as low as we should go
  const yWalk = Math.round((y / height) * walk - walk / 2);

  // Add text-shadow according to xWalk / yWalk
  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
  ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
  ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
  ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)
  `;
}

// Event listener
hero.addEventListener('mousemove', shadow);
