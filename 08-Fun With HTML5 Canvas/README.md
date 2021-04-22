# 🎨 Day 8 - Fun With HTML5 Canvas

I had fun unleashing my inner Picasso with this one! I always wanted to know how online drawing boards like skribbl works, so this gave me a fun general intro to coding a canvas.

![html5-canvas-demo](https://i.ibb.co/qRGHgSB/Screen-Shot-2021-04-22-at-4-38-20-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/08-Fun%20With%20HTML5%20Canvas/index.html)

## What I Learned

### 1. Canvas
 - The [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) allows you to draw graphics on a webpage using JavaScript and the HTML element `<canvas>`. 
 - To start, you create a canvas element in HTML.
 
 ```html
 <canvas id="draw" width="800" height="800"></canvas>
 
  ```
  
   - In JavaScript, you select the `<canvas>` element and get properties off it using `getContext`. 
   ```javascript
 const canvas = document.querySelector('#draw');
 const ctx = canvas.getContext('2d');
 
 ctx.strokeStyle = '#BADA55'; // choose intiial color
 ctx.lineJoin = 'round'; // decides how 2 connecting strokes will look 
 ctx.lineCap = 'round'; // shape of stroke
 ctx.lineWidth = 50; // thickness of line
 
  ```
   - Starting points (x,y coordinates) also need to be determined to know where to start and end a stroke path.
    - `ctx.beginPath()` starts the path and `ctx.stroke()` actually draws the stroke. 
    - `ctx.moveTo()` begins a new sub-path at the specified x,y coordinates while `ctx.lineTo()` connects the previous path's coordinates with the specified ones.
 ```javascript
 let lastX = 0;
 let lastY = 0;
 
 function draw(e) {
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY]; // updates the lastX and lastY points to this new sub-path
 }
 
  ```
  
### 2. Flags & Mouse Listeners
 - According to Wes Bos, a common method that appears with coding is the use of boolean flags. Boolean flags are convenient ways to toggle on and off a certain event.
 - In our case, we needed to determine when a user starts and stops drawing so we used the boolean, `isDrawing`, to help us. 
 
  ```javascript
 let isDrawing = false;
 
 function draw(e) {
  if(!isDrawing) return;  // Function only runs if we isDrawing is set to true.
   ...
 }
 
 canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}); // Update coordinates to the spot where cursor is pressed down. We can draw.
  canvas.addEventListener('mousemove', draw); // Every time mouse is moving, call draw function.
  canvas.addEventListener('mouseup', () => (isDrawing = false));   // Do not draw when mouse is up.
  canvas.addEventListener('mouseout', () => (isDrawing = false));  // Do not draw when mouse is out of canvas area.
 
  ```
 
 
  


