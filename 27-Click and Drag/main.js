// Select items slider
const slider = document.querySelector('.items');

// Flag that tells if user is clicking down or not
let isDown = false;

let startX;
let scrollLeft;

// Event listeners for each mouse event

slider.addEventListener('mousedown', () => {
  isDown = true;
  // Set an 'active' class once someone's mouse is down
  slider.classList.add('active');
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
  console.log('Do work');
});
