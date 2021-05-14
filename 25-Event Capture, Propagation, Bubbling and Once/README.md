# 💭 Day 25 - Event Capture, Propagation, Bubbling and Once

Today was super insightful! Our mini project involved learning about the different options available and characteristics regarding event listeners. 

![event-capture-demo](https://i.ibb.co/P1k01R8/Screen-Shot-2021-05-14-at-5-59-34-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/25-Event%20Capture,%20Propagation,%20Bubbling%20and%20Once/index.html)

## What I Learned

### 1. Capture
  - Normally, when we click on an inner most element that has parent elements with the same listener, the events will be triggered from the inside out.
  <img src="https://i.ibb.co/xq8LYnJ/Screen-Shot-2021-05-14-at-6-20-17-PM.png" width="400" />
  

   - `three` is the innermost div and `one` is the outermost parent div. Introducing, [`capture`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), a boolean you can attach to an event listener that reverses it so that the listener on the outermost parent dispatches first *before* the targeted innermost event.
   
 ```javascript
divs.forEach((div) =>
  div.addEventListener('click', logText, { capture: true })
);
 
 ```
   
  <img src="https://i.ibb.co/M8Wt2X9/Screen-Shot-2021-05-14-at-6-26-05-PM.png" width="400" />

  - With `capture` being true, there is no longer a bubble up effect, and an event gets fired immediately as soon as it's captured. This is why now `one` gets printed first. By default, `capture` is set to false.
  
### 2. Propagation
  - But what if we didn't want every event to be fired just because an element was nested under the same listener as its parents? [`Event.stopPropagation()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) prevents any future events from firing during this capturing and bubbling process.
  - In our case, if we clicked on the innermost div, `three`, we can use `Event.stopPropagation()` so that further events, such as the event listener on `two` and `one` won't get triggered anymore. 
    
 ```javascript

function logText(e) {
  console.log(this.classList.value);  // just prints 'three'
  e.stopPropagation(); 
}

divs.forEach((div) =>
  div.addEventListener('click', logText)
);
 
 ```
 
### 3. Once
 - `once` helps remove an event listener. It is a boolean that when set to `true`, only allows for the listener to be invoked only *once*. After that event is fired, the listener is automatically removed.
 - This property is especially useful when you want to prevent multiple events from triggering. 
 
  ```javascript
  

button.addEventListener('click', () => {
    console.log('You clicked, but this will just log once!');
  },
  { once: true }
);

 ```
 
 <img src="https://i.ibb.co/FKkgxmG/Screen-Shot-2021-05-14-at-6-47-52-PM.png" width="300" /> <img src="https://i.ibb.co/KrcgRf6/Screen-Shot-2021-05-14-at-6-48-19-PM.png" width="280" /> 
 

 
    
    
    
    
    
    
    
    
    
  
