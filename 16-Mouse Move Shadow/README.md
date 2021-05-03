# 🖱️ Day 16 - Mouse Move Shadow

Another cool `offsetX` / `offsetY` project for us to better understand mouse coordinates on a page. In this project, we were able to move a text's shadow according to where our mouse was on the page.

![mouse-move-demo](https://i.ibb.co/RvpHnns/Screen-Shot-2021-05-03-at-5-34-26-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/16-Mouse%20Move%20Shadow/index.html)

## What I Learned

### 1. destructuring
 - A shorter, more efficient way to assign multiple key-value pairs of an object is through destructuring. 
 - I was able to practice and understand it more through today's project. We had to get both the x and y coordinates from an element so this method made it super convenient.
 
 ```javascript
const { offsetWidth: width, offsetHeight: height } = this;

// is the same as:

const width = this.offsetWidth;
const height = this.offsetHeight; 

 ```
 
### 2. this vs e.target
 - When adding an event listener to an element, that element becomes `this` and will always stay the same. 
 - However, [`e.target`](https://www.w3schools.com/jsref/event_target.asp) represents which element triggered the event, and that can include *children* elements along with their parent.
 
```javascript
   if (this !== e.target) {                        
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }
 ```
 - In our case, `e.target` could also be the `<h1>` tag if we hovered over the text, which we didn't want. As a result, we had to do a little bit of math to account for that.
 
 ### 3. clientX vs offsetX
  - [`clientX`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX) and `clientY` gives you coordinates relative to the top-left corner of the browser window.
  - [`offsetX`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX), as we learned in [Day 13](https://github.com/sandaiiyahh/JavaScript30/tree/main/13-Slide%20In%20On%20Scroll), gives us the coordinates of an element relative to the top-left corner of its *parent* element.
  - Because our `<h1>` tag was a child of our `div` class, `clientX` was what we needed to retrieve instead of `offsetX` to avoid any child elements affecting the coordinates.
 
 ```javascript
 hero.addEventListener('mousemove', shadow);
 
 function shadow(e) {
   let { clientX: x, clientY: y } = e;
 }
 
 ```
 
 
 
 
 
