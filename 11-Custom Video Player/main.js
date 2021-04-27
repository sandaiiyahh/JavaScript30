/* GET OUR ELEMENTS */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]'); // [] -> means it's an attribute(?)
const ranges = player.querySelectorAll('.player__slider'); // both volume and playback rate
const fullscreen = player.querySelector('.fullscreen');

/* BUILD OUR FUNCTIONS */

// Check if video is paused or not to decide if to play or pause
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// Change video player icon state
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

// Skip forward/backward in video
function skip() {
  video.currentTime += parseFloat(this.dataset.skip); // ex. this.dataset.skip = "25"
}

// Update volume/playback rate of video
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// Update progress bar color depending on video's current time
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Update video's currentTime depending on where you dragged around in progress bar
function scrub(e) {
  // Get percentage of where you clicked relative to progress bar
  // To get Scrub Time, multiply that percentage by video duration
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleFullscreen() {
  player.requestFullscreen();
}

/* HOOK UP EVENT LISTENERS */

// Listen for click event on video player
video.addEventListener('click', togglePlay);
// Listen for click event on play/pause button
toggle.addEventListener('click', togglePlay);

// Listen for play/pause event on video (to update player icon)
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// Listen for click on each of the skip buttons
skipButtons.forEach((button) => button.addEventListener('click', skip));

// Listen for change on range of either volume bar or playback rate bar
ranges.forEach((range) => range.addEventListener('input', handleRangeUpdate));

// Listen for any updates on video's current time
video.addEventListener('timeupdate', handleProgress);

// Listen for clicks inside the progress bar
progress.addEventListener('click', scrub);

// Listen for mouse move in progress bar
let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));

// Listen for click on fullscreen button
fullscreen.addEventListener('click', handleFullscreen);
