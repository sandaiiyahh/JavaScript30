// Select items slider
const slider = document.querySelector('.items');

// Flag that tells if user is clicking down or not
let isDown = false;

let startX; // records position before the mouse dragging starts
let scrollLeft; // records initial scroll position

// Event listeners for each mouse event

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  // Set an 'active' class once someone's mouse is down
  slider.classList.add('active');
  // Get position of mousedown, offsetting any potential margins
  startX = e.pageX - slider.offsetLeft;
  // Get initial scroll position
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  // When someone leaves, set isDown to false
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  // When someone's mouse is up, set isDown to false
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', () => {
  if (!isDown) return; // stops function from running. Won't run if isDown is false
});
