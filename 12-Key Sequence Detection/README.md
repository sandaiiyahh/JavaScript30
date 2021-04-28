# 🦄 Day 12 - Key Sequence Detection

Short and sweet, this project was equally as fun as the longer ones. Today, we incorporated our own secret code into our browser for users to get a nice surprise when they type it in!

![key-sequence-demo](https://i.ibb.co/Thbh77t/Screen-Shot-2021-04-28-at-4-51-29-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/12-Key%20Sequence%20Detection/index.html)

## What I Learned

### 1. event.key
 - When listening for a window `keyup` event, you can see what key the user pressed on with `event.key`. 
 - In our case, we were able to keep track of every key the user pressed by placing them in an array.
 
 ```javascript
 window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
});

 ```
 <img src="https://i.ibb.co/qy1NT7K/Screen-Shot-2021-04-28-at-5-01-24-PM.png" width="300" />
 

### 2. Splice Method
 - An easy and effective way of making sure an array's length matches another length is using [`splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice). In splicing on the first index, deleting the secret code's length by the inputted keys' length, the array will constantly be removing the first element as a new one comes in.
  - In doing this, we are able to test an input whose length will always be the length of our secret code. 
 
 ```javascript
 pressed.push(e.key);
 
 pressed.splice(0, pressed.length - secretCode.length);

 ```
 - If the secret code was 5 letters, for example, the input array removes the first element every time it reaches over 5 letters. 
  <img src="https://i.ibb.co/WcSxjzf/Screen-Shot-2021-04-28-at-5-58-47-PM.png" width="400" />
 
 
