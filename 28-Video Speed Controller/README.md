# 📹 Day 28 - Video Speed Controller

Similar to previous projects, today's project consisted of a bit of calculations to create a hoverable mouse functionality on a bar that controls the speed of the video.

![video-speed-controller-demo](https://i.ibb.co/GMWTs8g/Screen-Shot-2021-05-23-at-8-53-51-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/28-Video%20Speed%20Controller/index.html)


## What I Learned

### 1. pageY
 - Having used pageX in another day's project before, we used pageY now for this project to figure out the position of our mouse relative to the top edge of the document.
 - To offset for any vertical padding or borders of the `.speed-bar`, we then subtracted the position by `offsetTop`. This helps us to accurately get the position starting from the top of the speed bar (0) to the bottom.
 
```javascript

  const y = e.pageY - this.offsetTop;

```

- To determine how much to fill the speed bar in percentage form, we divided it by the `.speed-bar`'s `offsetHeight` and apply that number to the CSS height style. Then, wherever we move our mose on the bar, the `bar` will stretch to however much it needs to.

```javascript

  const percent = y / this.offsetHeight;
  const height = `${Math.round(percent * 100)}%`;
  bar.style.height = height;

```

### 2. `toFixed()`
 - [`.toFixed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) rounds a number to a specified number of decimal places. In our case, our playback rate was an extremely long number, so we used `.toFixed(2)` so we can show a much cleaner and shorter number on the actual page.
 
```javascript

  const playbackRate = percent * (max - min) + min;
  bar.textContent = `${playbackRate.toFixed(2)}x`;

```
 
 
 
 
 
 
 
