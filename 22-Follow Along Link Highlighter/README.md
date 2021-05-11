# 🔗 Day 22 - Follow Along Link Highlighter

I've always wondered how there can be a highlight that follows our every move on tabs. Aside from the hover effect, this method I learned from today's project could also be useful! We learned to use a span element in addition to an event listener to create a cool follow along effect. 

![follow-along-link-demo](https://i.ibb.co/4WnCFhg/22-00.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/22-Follow%20Along%20Link%20Highlighter/index.html)

## What I Learned

 ### 1. Adding a Class 
  - As a good refresher, you can add a class with the [`classList.add()`](https://www.w3schools.com/jsref/prop_element_classlist.asp) property.
  - In our project, we added a class element `highlight` to the span element. This `highlight` class has the CSS styling that gives it transform and border properties.

### 2. getBoundingClientRect()
  - The star of the show, the [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) method returns an object that tracks the size of the element and its position relative to the window.
   <img src="https://i.ibb.co/FVPDQtt/rect.png" width="800" />
   
  - In our case, we used this to retrieve the size of our `a` links, which is what we needed to size the borders of our `highlight` span element. 
  
 ```javascript
 
  const linkCoords = this.getBoundingClientRect();

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
  };

 ```
  
 ### 3. Accounting for Scroll in Positioning
  - To track the position of an element relative to the viewport, we can retrieve its `left` and `top` properties. We used this to find the positioning of the `a` link and overlap the `highlight` element on it.
  - However, one thing to keep in mind is scrolling. When an user scrolls, the positioning adjusts. To take that into account, we can add `scrollX` and `scrollY` to the coordinates.
  
   ```javascript
 
let top = linkCoords.top + window.scrollY;
let left = linkCoords.left + window.scrollX;

 ```
  
  
  
  
  
  
  
