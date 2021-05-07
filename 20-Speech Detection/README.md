# 💬 Day 20 - Speech Detection

I can see the potential, endless posibilities with today's project. For such a simple and short project, I was fascinated by the ability to use speech recognition and have your words appear on the DOM.

![speech-detection-demo](https://i.ibb.co/qjBhv3q/Screen-Shot-2021-05-07-at-6-04-34-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/20-Speech%20Detection/)

## What I Learned

### 1. `window.SpeechRecognition`
 - The Web Speech API is what requests users for microphone access and incorporates voice data onto web applications. 
 - In our project, we used their [`SpeechRecognition`](https://courses.wesbos.com/account/access/5f9c820c24b5071fef484ffb/view/194128542), which identifies and transcribes our speech.
 - For Chrome browsers, you add "webkit" in front of `SpeechRecognition`

 ```javascript
 
 window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
 
// Create new instance of speech recognition
const recognition = new SpeechRecognition();
recognition.interimResults = true; // transcribes as you speak instead of waiting until the end

 ```

### 2. `result` Event for SpeechRecognition
 - Listening for the `result` event is the equivalent of listening to a `click` event. When you pass in `event`, you receive a ton of speech information in a nested list form. 
 - Some details include seeing the percentage accuracy of the Web Speech API or even a boolean, `isFinal`, that identifies if you finished speaking or not. For our case, we were looking for the transcript text.
 
```javascript
 
recognition.addEventListener('result', (e) => {
  const transcript = e.results[0][0].transcript;

  // Display transcript on webpage
  p.textContent = transcript;

});

 ```
 
 ### 3. Re-run with `end` Event 
  - Whenever you need to run a function over again, attaching it to an `end` event listener is actually super helpful. 
  - In our case, we wanted the speech recognition to run again even if we take a pause. As a result, we attached the function to the `end` event listener. 
  
  ```javascript
 
recognition.addEventListener('end', recognition.start);

 ```
 
  ### 4. `appendChild`
   - [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) adds a node to the end of the specified parent's node. 
   - I don't see this method used often, so it was nice to see it in practice for this project. We wanted to create a new paragraph each time there was a speech pause and attach it to the bottom of our `words` div element. Doing so creates a cool speech notebook effect, where each speech starts a new paragraph.
   
 ```javascript
 
  // Add a NEW p element every time there's a pause in speech detected
  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }

 ```
 
 
 
 
