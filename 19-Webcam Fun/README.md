# 📸 Day 19 - Webcam Fun

I had way too much fun with this one! Today's project involved creating a photobooth using our webcam, canvas and pixel manipulation. 

![webcam-fun-demo](https://i.ibb.co/WVLmD9T/Screen-Shot-2021-05-06-at-6-54-00-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/19-Webcam%20Fun/)

## What I Learned

### 1. Retrieving Webcam
 - To ask users for permission to use their webcams, we seek the help of the `navigator` object and its [`mediaDevices`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices) property.
   
 ```javascript
 
 navigator.mediaDevices.getUserMedia({ video: true, audio: false });
 ```
- If we are successful, we are returned a promise. Because we want our `video` tag to display the webcam video right on the page, we would need to set the result, or `localMediaStream`, to the video's `src`. 

 ```javascript
 
navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      video.srcObject = localMediaStream;
    })
 ```
 
### 2. Display Video on Canvas
 - When trying to display our video on the `canvas` element (so we could play around with it), we need to make sure the *canvas* dimensions match the *video* dimensions to properly render the video.
 
  ```javascript
 function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  ```
  
 - [`drawImage`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage) takes in either an image or video to illustrate it on our canvas. Optionally, it also accepts a `starting x coordinate`, `starting y coordinate`, `width` and `height`.
 
 ```javascript
 
ctx.drawImage(video, 0, 0, width, height);

 ```
 
 ### 3. `canplay` Event 
  - [`canplay`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplay_event) is a new, useful event I learned that fires whenever a media is buffered and ready to play.
  - In our case, we didn't want to manually run `paintToCanvas` each time to get our video onto our canvas, so in using this event, our video can immediately be displayed on our canvas as soon as the video is up and running. 
  
 ```javascript
video.addEventListener('canplay', paintToCanvas);

 ```
  
 ### 4. Pixels on Canvas
  - To retrieve pixels off the canvas, we can use `getImageData`. In order to achieve cool filters on our video, we needed to select the pixels so we could change the rgba values of them. 
  
```javascript
let pixels = ctx.getImageData(0, 0, width, height);

 ```
 
 ### 4. Take a snapshot with Canvas
 - For us to achieve that snapshot effect of capturing a frame, the canvas element has a cool method called [`toDataURL`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL) that creates a text-representation of an image. 
 - Using this data, we can set it to a link's URL. When you click on the link, you can actually download the image.
 
```javascript
function takePhoto() {
  const data = canvas.toDataURL('image/jpeg'); 

  const link = document.createElement('a');
  link.href = data; 

  link.setAttribute('download', 'amazing');
  // link.textContent = 'Download Image';
  link.innerHTML = `<img src='${data}' alt='Amazing Person'/>`;
}
 ``` 
 
### 5. `createElement`
  - [`createElement`](https://www.w3schools.com/jsref/met_document_createelement.asp) easily creates a whole element. In our case, we wanted to create a link that allows us to display and download an image.

### 6. `setAttribute`  
  - Instead of navigating to a file, when you set a link's attribute to "download", clicking on the link triggers a download instead. 

### 7. `insertBefore`
 - A helpful method to display the latest items first is using `insertBefore`. 
 - In our project, we wanted the most recent snapshots to appear in front. By using `insertBefore` each time we take a photo, we place the link/photo right before the div element's first child. 
 
 ```javascript
  strip.insertBefore(link, strip.firstChild);  // strip is a div element
 ``` 
 
 ## Improvements
 - After completing this project, a thought came up of wanting to implement each photobooth filter as a button. 
 - Even though I was able to create working filter buttons, `setInterval`, which was what was placing frames onto our canvas every couple milliseconds, made it difficult to switch between filters. 
 - If given the free time, I would definitely look into this as an improvement to explore.
 
 
 
  
 
