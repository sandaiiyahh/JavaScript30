# 🖱️ Day 27 - Click and Drag

You never think about how much math is involved in something as simple as holding down and dragging until you try to implement it yourself. In this project, I learned to appreciate the work that goes into clicking and dragging across a page.

![click-and-drag-demo](https://i.ibb.co/tJG0C83/Screen-Shot-2021-05-18-at-5-53-03-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/27-Click%20and%20Drag/index.html)

## What I Learned

### 1. Flags with Mousemove
 - Another useful way of using a boolean flag variable is between separate events. For our case, we only wanted our `mousemove` event to do things only when our mouse was clicked down.
 - Our `mousemove` event is dependent on our boolean `isDown` to determine whether to calculate the movement of the mouse or not. Otherwise, we can just return if `isDown` is false.
 
 
```javascript
let isDown = false;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  
  const x = e.pageX - slider.offsetLeft;
  ...
  
});

 ```
 
### 2. pageX and offsetLeft
 - To determine where a mouse position is when clicked, you can retrieve a mouse event's [`pageX`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX). 
 - For us to make the click and drag possible, we needed `pageX` to record where our initial mouse position was. One important thing to account for is padding and margins on the element. To re-adjust for this, we can subtract the value of its parent element's offset from `pageX`.
 
 ```javascript
 let startX;
 
 slider.addEventListener('mousedown', (e) => {
  startX = e.pageX - slider.offsetLeft;
});

 ```
 
 ### 3. scrollLeft
  - [`scrollLeft`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft) determines the number of pixels that an element is scrolled from its left edge.
  - We used this property to first track and store how scrolled in our slider is. Then we referenced this variable again when we moved our mouse, in order to physically change the slider and have it scroll.
  
 ```javascript

 slider.addEventListener('mousedown', (e) => {
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mousemove', (e) => {
  const walk = x - startX; // distance from when we intiially clicked down to how far we moved

  slider.scrollLeft = scrollLeft - walk;
});

 ```
 
 
 
 
