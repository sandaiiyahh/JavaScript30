// Select items slider
const slider = document.querySelector('.items');

// Flag that tells if user is clicking down or not
let isDown = false;

let startX;
let scrollLeft;

// Event listeners for each mouse event

slider.addEventListener('mousedown', () => {
  isDown = true;
});

slider.addEventListener('mouseleave', () => {
  // When someone leaves, set isDown to false
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  // When someone's mouse is up, set isDown to false
  isDown = false;
});

slider.addEventListener('mousemove', () => {
  if (!isDown) return; // stops function from running. Won't run if isDown is false
  console.log('isDown -->', isDown);
  console.log('Do work');
});
