// Add selectors
const speed = document.querySelector('.speed'); // entire white bar
const bar = speed.querySelector('.speed-bar'); // the filled part of bar
const video = document.querySelector('.flex');

// Listen for mouse move on white speed bar
speed.addEventListener('mousemove', function (e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;

  const height = `${Math.round(percent * 100)}%`; // for determining the css fill of bar
  bar.style.height = height;

  // Get playback rate and apply it on DOM
  const playbackRate = percent * (max - min) + min;
  bar.textContent = `${playbackRate.toFixed(2)}x`;

  // Take playback rate and apply to our video
  video.playbackRate = playbackRate;
});
