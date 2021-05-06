const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap'); // audio
const redBtn = document.querySelector('.red');
const horrorBtn = document.querySelector('.split');
const greenScreenBtn = document.querySelector('.green');
const normalBtn = document.querySelector('.normal');

// Get video from webcam
function getVideo() {
  // Returns a promise
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      // console.log(localMediaStream)
      // Take video and set source object to this localMediaStream
      video.srcObject = localMediaStream;
      video.play(); // emits "canplay" event
    })
    .catch((err) => {
      console.error(
        'Oh no, we need your webcam permission in order for this to work!',
        err
      );
    });
}

// Take frame from video to paint onto browser
function paintToCanvas() {
  // We need to make sure canvas and video are the same width/height
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  // Every couple seconds, take image from webcam and put it onto canvas
  return setInterval(() => {
    // drawImage: pass it an image/video and it will place it on the canvas
    ctx.drawImage(video, 0, 0, width, height);

    // Take pixels out
    let pixels = ctx.getImageData(0, 0, width, height); // huge array of pixels

    // Play around with pixels
    switch (this.className) {
      case 'red':
        pixels = redEffect(pixels);
        break;
      case 'split':
        ctx.globalAlpha = 0.1;
        pixels = rgbSplit(pixels);
        break;
      case 'green':
        pixels = greenScreen(pixels);
    }

    // Put pixels back into canvas
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

// Takes a photo
function takePhoto() {
  // Play sound
  snap.currentTime = 0;
  snap.play();

  // Take data out of canvas
  const data = canvas.toDataURL('image/jpeg'); // attributes of photo in text-form

  // Create a link
  const link = document.createElement('a');
  link.href = data; // href specifies the URL to go to

  // "Amazing" becomes name of downloaded photo
  link.setAttribute('download', 'amazing');
  // link.textContent = 'Download Image';
  link.innerHTML = `<img src='${data}' alt='Amazing Person'/>`;
  strip.insertBefore(link, strip.firstChild);
}

// Filter effects
function redEffect(pixels) {
  // Loop through every single pixel
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = pixels.data[i] + 100; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
  }
  return pixels;
}

function rgbSplit(pixels) {
  // Pull a part of rgb and put them on either side
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i] + 100; // RED
    pixels.data[i + 100] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i - 250] = pixels.data[i + 2] * 0.5; // BLUE
  }
  return pixels;
}

function greenScreen(pixels) {
  // Hold our min and max green
  const levels = {};

  // Grab every single slider & set & put their names & values into 'levels' object
  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  // Loop through every single pixel and if the rgb is anywhere between the min/max, take them out
  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // Set the 4th pixel (alpha/transparency pixel) to 0 (totally transparent)
      pixels.data[i + 3] = 0;
    }
  }
  return pixels;
}

getVideo();

// Listen for "canplay" so we don't have to manually run paintToCanvas each time
// video.addEventListener('canplay', paintToCanvas);
normalBtn.addEventListener('click', paintToCanvas);
redBtn.addEventListener('click', paintToCanvas);
horrorBtn.addEventListener('click', paintToCanvas);
greenScreenBtn.addEventListener('click', paintToCanvas);
