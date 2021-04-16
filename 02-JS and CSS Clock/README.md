# 🕒 Day 2 - JS and CSS Clock 
For our second project, we built a simple analog clock. And honestly, I never paid much attention to how a clock functions until now. I had fun converting the time units to degrees to display the current time.  

![clock-project](https://i.ibb.co/DtVjvkc/Screen-Shot-2021-04-15-at-7-20-59-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/02-JS%20and%20CSS%20Clock/index.html)

## What I Learned

### 1. Chrome DevTools
 - When using the `transform` CSS property to rotate something, Chrome DevTools has a handy clock icon, where I can drag or scroll around to change the angle. This is perfect for visual learners like me! 
  <img src="https://i.ibb.co/G7dC0YP/Screen-Shot-2021-04-15-at-12-32-45-PM.png" width="300" />


### 2. `transform-origin` Property
 - The [transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin) property sets the point at which transformations are measured from. By default, this is set to 50%. 
 - This property allowed us to change the pivot point of our clock hands to the end of the x-axis, or the most right hand side. 
 
  ```css
  
    transform-origin: 100%;

  ```
  
  ### 3. `transition-timing-function` Property
   - With this [property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function), you can add further details to your transition effect.
   - With each transition value, you can use the `cubic-bezier` function to be more precise. The Chrome DevTools offers a cubic bezier editor that made it easy to play around and visually see any changes you make to the curve.
   - In changing the cubic bezier curve, we were able to get a more realistic clock ticking effect. 
    
  ```css
  
     transition: all 0.05s;
     transition-timing-function: cubic-bezier(0.1, 2.76, 0.54, 1);

  ```
   
   <img src="https://i.ibb.co/djdLjy7/Screen-Shot-2021-04-15-at-12-42-15-PM.png" width="300" />
   
   
  ### 4. Date.now() Object
   - I have used this [object](https://www.w3schools.com/jsref/jsref_obj_date.asp) before, but not for time. Using the Date object, you can conveniently extract the second, minute, and hour with its object methods.
   
  ```javascript
  
     const now = new Date();
     
     const seconds = now.getSeconds();
     const mins = now.getMinutes();
     const hours = now.getHours();

  ```
   
  ### 5. Inline Styling using JavaScript
   - In selecting an element using a DOM method such as `document.querySelector()`, you can use its `style` property to set various styles to it. 
   - This method helped us easily set a CSS property that rotates our clock hands to a dynamic degree value. 
   
   ```javascript
  
     const secondHand = document.querySelector('.second-hand');
     
     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

   ```
   
   
 
