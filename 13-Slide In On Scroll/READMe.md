# 🎢 Day 13 - Slide In On Scroll

This was a really fun and interesting project to me! I always wanted to learn how people implemented cool animations whenever a user scrolls their page, and I'm glad I had a look at the behind the scenes here. Unfortunately, it was a lot more math than I expected but still super exciting to learn!

![slide-in-demo](https://i.ibb.co/dGz3SQW/Screen-Shot-2021-04-29-at-10-02-56-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/13-Slide%20In%20On%20Scroll/index.html)

## What I Learned

### 1. debounce
 - Debounce comes extremely handy when you want to limit the amount of times a code runs after an event is triggered. This is great to avoid performance issues.
 - In particular for our project, we had to use a debounce function because we were getting a hit everytime a user scrolls, which leads to unecessary processing.
 
 ```javascript
function debounce(func, wait = 20, immediate = true) {  // waits 20 ms before registering an event
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener('scroll', debounce(checkSlide))

 ```
 
### 2. window.scrollY
 - This is where it gets mathematical. The window has a built in [`scrollY`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY) property, which calculates how many pixels you are scrolled in from the top. 
 - We used this to figure out when our image should slide in or not. I can see this property being really useful for implementing other animations affected by scroll events. The math will take some console.logging and getting used to though!
 
```javascript
const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2; // pixel level at which photo will slide in at (halfway)

const isNotScrolledPast = window.scrollY < imageBottom;

 ```
 
 ### 3. window.innerHeight
  - [`window.innerHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight) is the pixel height of the window. 
  - We used `innerHeight` to measure the pixel level of where a user currently is at the bottom. This number doesn't start from 0 at the top, and ascends as you scroll down. 
  
  ### 4. offsetTop
   - [`offsetTop`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop) provides useful information! It tells you the distance from the element's outer border in relations to the top of its parent's outer border. 
   - To put it into context, we used `offsetTop` to calculate how far down the top of our image is from the top of the window object. We added the image's height to it, to see the distance from the bottom of the image, so we know when the image doesn't need to scroll in anymore.
   
```javascript

const imageBottom = sliderImage.offsetTop + sliderImage.height; // how far bottom of image is from top of window

const isNotScrolledPast = window.scrollY < imageBottom;  // we didn't scroll past image if scroll pixel level is less than imageBottom

 ```
 
 
