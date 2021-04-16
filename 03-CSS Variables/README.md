# 🖼️ Day 3 - CSS Variables
Day 3's project felt minimal, yet still packed a punch! Today, we focused on learning about CSS variables, and updating them using event listeners and other JS methods.

![css-variables-demo](https://i.ibb.co/q5HkwJp/Screen-Shot-2021-04-16-at-4-49-08-PM.png)

# Demo Link
View demo [here](http://sandaiiyahh.github.io/JavaScript30/03-CSS%20Variables/index.html)

## What I Learned

### 1. `:root` Selector & CSS Variables
 - The [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) selector allows us to apply CSS to the `<html>` element. In our case, we used it to declare global CSS variables. 
 - The syntax for declaring a CSS variable involves starting the custom property value with a double hyphen `--`. To use the value in your CSS, you wrap the variable inside a `var()` function.
 
  ```css
    :root {
     --base: #ffc600;
     --spacing: 10px;
     --blur: 5px;
    }
     
     img {
      padding: var(--spacing);
      background: var(--base);
      filter: blur(var(--blur));
    }
  ```
  
### 2. dataset
 - It was cool to see data attributes from Day 1 make a comeback, but this time, I learned that they are all stored conveniently in a dataset object. This object contains all the data attributes from a specific element.
 
  ```html
    <input
        id="spacing"
        type="range"
        name="spacing"
        min="10"
        max="200"
        value="10"
        data-sizing="px"
      />  
  ```
  
  ```javascript
  const suffix = this.dataset.sizing;  // allows us to get 'px' from the data attribute, sizing
  ```
  
### 3. document.documentElement with setProperty
 - On the topic of root, [`document.documentElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement) is the root element in JavaScript. 
 - Along with `style.property` used in a previous project, I enjoyed learning about [setProperty()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty), which is another method that changes CSS values.
 - As a result of this syntax, we were able to update the global CSS variables.
 
  ```javascript
   document.documentElement.style.setProperty('--base', '#df94ac');
  ```







 
