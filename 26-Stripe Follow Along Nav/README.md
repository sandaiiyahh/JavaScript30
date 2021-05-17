# 🚧 Day 26 - Stripe Follow Along Nav

It is fascinating how Wes Bos wanted to know how to create Stripe's navbar feature, and was able to implement it on his own. That is the determination and skills I strive for. Today, we learned how to create a cool navigation involving a shared background among the dropdowns.

![stripe-follow-along-demo](https://i.ibb.co/NWXXCY0/Screen-Shot-2021-05-17-at-4-14-34-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/26-Stripe%20Follow%20Along%20Nav/index.html)

## What I Learned

### 1. CSS `>` Selector
 - To target all direct descendants of a particular class element, you can use the [child selector](https://www.w3schools.com/css/css_combinators.asp), `>`. 
 - In our case, this is helpful when we want to target all `li` list items, but just the ones under a certain element `.class`, in case there are other `li` items elsewhere.
 
 ```javascript
const triggers = document.querySelectorAll('.cool > li');
 ```
 
 ### 2. `this` in Arrow Functions
  - As a good refresher, it's good to know that the context of `this` changes to be that of the `window` when you use a function within another function. 
  - In our case, we used `setTimeout()` inside our function. To maintain the context of `this`, use the ES6 arrow function so that `this` inherits from the parent, which in our case, is the `li` list item.
  
 ```javascript
function handleEnter() {
  this.classList.add('trigger-enter');
  
  setTimeout(
    () =>
      this.classList.add('trigger-enter-active'), // adds class to `li`
    150
  ); 
  
 ```
 
  ### 3. Multiple Classes with Transitions
   - If you are hiding an element and want it to transition in right when it appears, a way to do this would be to use *two* classes. That is because transitions can't be applied on elements that aren't even displayed.
  
  ```javascript
  this.classList.add('trigger-enter');
 ```
 
   ```css
  .dropdown {
    transition: all 0.5s;
    display: none; 
    opacity: 0;
}

  .trigger-enter .dropdown {
    display: block;
    opacity: 1;
}

 ```
 - The transition effect will not show with `display: none`. To solve this, we can add a first class that adds `display: block` to have the element appear first. Then, we add a second class that appears a split second later with the added transition properties. 
 
  ```javascript
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.add('trigger-enter-active'), 150);
 ```
 
 ```css
  .trigger-enter .dropdown {
    display: block;
}

  .trigger-enter-active .dropdown {
    opacity: 1;
}


 ```
 
 ### 4. Get Coordinates In Relation To Element
  - Similar to [Day 22](https://github.com/sandaiiyahh/JavaScript30/tree/main/22-Follow%20Along%20Link%20Highlighter)'s project, we are using `getBoundingClientRect` to determine the sizing of our highlight, or in this case, our `background`, for our each of our dropdown. However, our `background` is inside a `nav`. 
  - As a result, this will affect how we figure out the coordinates for `background`. Because our coordinates will be positioned based on the positon of `nav`, we can get the coordinates of `nav` and subtract them from `background`'s coordinates.
  
 ```javascript
const background = document.querySelector('.dropdownBackground');

const navCoords = nav.getBoundingClientRect();
const dropdownCoords = dropdown.getBoundingClientRect();

const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
};

background.style.setProperty('width', `${coords.width}px`); // apply coords to background

```

- This way, when we add a new element to the file, the `top` and `left` coordinates will adjust accordingly as the `nav ` gets bumped up or down. 
   
   
  
