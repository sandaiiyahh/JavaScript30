# ✅ Day 10 - Hold Shift and Check Checkboxes

For a short tutorial video, I did not expect to spend so long on it! In this project, I had fun learning how to incorporate the shift keyboard functionality to hold and check off multiple things off our list. 

![checkbox-shift-demo](https://i.ibb.co/hd7tykd/checklist.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/10-Hold%20Shift%20and%20Check%20Checkboxes/index.html)

## What I Learned

### 1. MouseEvent.shiftKey
 - [`MouseEvent.shiftKey`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/shiftKey) is a Boolean that returns true if the shift key on our keyboards was pressed.
 - It was nice to know click events also work with keyboard presses. 
 
 ```javascript
 const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
  checkboxes.forEach((checkbox) =>
   checkbox.addEventListener('click', handleCheck)
 );
 
 function handleCheck(e) {
  if (e.shiftKey) {
    ...
  }
 }
 
 ```

### 2. checked
 - When using an HTML input checkbox, you can conveniently check if a box is checked off with [`checkbox.checked`](https://www.w3schools.com/jsref/prop_checkbox_checked.asp). 
 - In our case, we had to check off certain checkboxes, not all. So in manually manipulating the state of the checkbox, we were able to easily check off the boxes we want.
 
 ```javascript
 checkbox.checked = true;
 
 ```
 
 ### 3. lastChecked vs this
  - Understanding what checkbox `lastChecked` was and what checkbox `this` was was pretty much the logic behind this project. Although this took a majority of time for me to wrap my head around, I finally somewhat understand after whole lot of console.logging. 
  - In our project, whatever box we checked first is `lastChecked`. When we hold shift and press down on *another* checkbox, that box is `this`. 
  - From the range between the `lastChecked` checkbox and `this` checkbox, we will check off those boxes. 
  - We need `lastChecked` because without it, `this` will always be the one we just clicked, and not the starting checkbox. As a result, `lastChecked` needs to be reassigned to `this` to store that previous checkbox value.
 
 
 
 
 
