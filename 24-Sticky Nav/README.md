# 💬 Day 24 - Sticky Nav

Today's project knocks off a basic functionality that is super helpful to know for web applications: a fixed nav bar. We learned how to create a fixed navbar upon scrolling and used JavaScript to trigger different animations from it.

![sticky-nav-demo](https://i.ibb.co/mCytDwn/24-00.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/24-Sticky%20Nav/index.html)

## What I Learned

### 1. Fixed Positions
 - One important thing to keep in mind when adding `position: fixed` to an element is that if you were to remove it from the DOM, it leaves the space it once took. This causes a snap effect where all the other elements on the bottom *shift* up.
 - In our project, we wanted to have a fixed navbar only once we reached that navbar position. A possible way to stop the judder effect is to offset it with adding `padding` that is the same pixel height as the navbar.
 
  ```javascript
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';  // add the extra padding
  } else {
    document.body.style.paddingTop = 0;  // remove the extra padding
  }
 
 ```
 
 ### 2. Adding A Class to the Body
  - The benefits of adding a class to a body is that you can target multiple children, especially when you want to add effects/changes to them. 
  - When we reached the position of the top of our navbar, we wanted to bring in a logo and make our paragraph body `div` more zoomed in *in addition* to just making the navbar fixed. Having one class in our body to do it all was extremely handy.
  
 ```javascript
  document.body.classList.add('fixed-nav');
 ```
  
 ```css
 
 .fixed-nav nav {
   position: fixed;
   box-shadow: 0 5px rgba(0, 0, 0, 0.1);
 }
 
 .fixed-nav .site-wrap {
   transform: scale(1);
 }
  
 .fixed-nav li.logo {
   max-width: 200px;
 }

 ```




