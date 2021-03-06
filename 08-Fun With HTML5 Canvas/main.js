const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); // ctx: where we do all our drawing

// Size canvas to be exact width of window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55'; // the color that prints when you draw
ctx.lineJoin = 'round'; // when a line meets another line, should it be squared off?
ctx.lineCap = 'round'; // should the end of line be squared off?
ctx.lineWidth = 50; // changes thickness of line

// Starting variables
let isDrawing = false; // flag to toggle if to draw or not:
let lastX = 0; // points (x,y) so we know where to start/end from
let lastY = 0;
let hue = 0;
let direction = true;

// Function gets called whenever mouse is on top of canvas
function draw(e) {
  if (!isDrawing) return; // stop function from running when mouse is not down

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath(); // start a path
  ctx.moveTo(lastX, lastY); // move to specified points
  ctx.lineTo(e.offsetX, e.offsetY); // connect previous points to new points
  ctx.stroke(); // draw the stroke

  [lastX, lastY] = [e.offsetX, e.offsetY]; // updates lastX & lastY points:

  hue++; // hue updates to a different color everytime draw is run
  if (hue >= 360) hue = 0; // so we don't go over max 360 (although it's fine)

  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) direction = !direction; // flips direction

  // Depending on the direction being true or false, increment/decrement the lineWidth
  direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

// As soon as mouse is down, but before mouse moves, update X and Y points
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw); // every time mouse is moved, call draw function
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
