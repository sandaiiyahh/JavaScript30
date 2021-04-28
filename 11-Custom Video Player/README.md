# 📽️ Day 11 - Custom Video Player

Is it safe to say this is my favorite project yet? After playing around with the YouTube Player API in a project before, I enjoyed seeing how it was done with a HTML5 player. Everything was straightforward and easy to understand! 

![video-player-demo](https://i.ibb.co/601C5cq/Screen-Shot-2021-04-27-at-6-45-45-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/11-Custom%20Video%20Player/index.html)

## What I Learned

### 1. Video Play/Pause
 - To check if a video element is paused or not, you can use `video.paused`. It returns a boolean.
 - This was great for our case, as we needed to know if a video was paused in order to continue to play or pause a video after someone clicked it.

```javascript
 video.addEventListener('click', togglePlay); 
 
 function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

 ```
 

### 2. parseFloat
 - [`parseFloat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) helped to turn our string into a float number. 
 - To skip forward or backward, we were able to use this method to convert our string into a number and add that onto the video's current time.  

 ```javascript
function skip() {
  video.currentTime += parseFloat(this.dataset.skip); // ex. this.dataset.skip = "25"
}

 ```
 
### 3. Video Progress Bar (using flex basis)
  - In order to determine how much of the video progress bar is filled in relation to the time, there is a special formula! You divide the video's current time by how long the video is. Multiply by 100 to get it into a nice decimal. 
  - Luckily, Wes Bos has a CSS style called [`flex-basis`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) on the progress bar element, so we were able to update its width value to that percentage.
  
 ```javascript
 video.addEventListener('timeupdate', handleProgress);
 
 function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

 ```
 
### 4. Event Listeners: play, pause, timeupdate
 - You can conveniently listen to play/pause events of a HTMLMediaElement. In doing so, we were able to detect when our video has played or paused and update our play/pause button icon accordingly.
 
  ```javascript
 video.addEventListener('play', updateButton);
 video.addEventListener('pause', updateButton);
 
 function updateButton() {
   const icon = this.paused ? '►' : '❚ ❚';
   toggle.textContent = icon;
}

 ```
- In addition, HTMlMediaElement also has a [`timeupdate`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event) event. In firing only when the current time of the video gets updated, we were able to know when to change our progress bar.


### 5. offsetWidth
 - If you ever wanted to update the video's time when you drag and click on a video, you can use an event's `offsetX` and the progress bar's `offsetWidth`. `offsetX` displays how far the cursor is along the x axis, relative to the progress bar element. `offsetWidth` is the full width of the element.

```javascript
 progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
 
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

 ```
 
 
