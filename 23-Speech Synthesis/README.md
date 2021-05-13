# 💬 Day 23 - Speech Synthesis

Adding this one to my project favorites again! I am finding myself loving the ones involving speech. Today's project involves text-to-speech this time, with options to be able to change the pitch, rate, and voice of the speaker.

![speech-synthesis-demo](https://i.ibb.co/cQW3Fzq/Screen-Shot-2021-05-12-at-12-30-54-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/23-Speech%20Synthesis/index.html)


## What I Learned

### 1. Adding a Custom Font
 - Ok, might be off topic to the project, but I always had trouble incorporating custom fonts to my projects. Thanks to Wes Bos, I found a method of doing it.
 - To add custom fonts to your CSS, you can link the source of your font in your HTML inside the `<head>` tags and include that font name in your CSS. 
 
 ```html
    <link
      href="https://fonts.googleapis.com/css?family=Pacifico"
      rel="stylesheet"
      type="text/css"
    />
 ```
  
 ```css
  h1 {
    font-family: 'Pacifico', cursive;
  }

 ```
 
 ### 2. SpeechSynthesis
  - Another cool tool in the browser to add to the books! [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) is the interface for the Web Speech API, and it contains synthesis voices.
  - To retrieve info on the speech, we make the request using [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) and save it into a variable. Inside, we can see more info about the voice, such as the language, pitch, and rate. 
  
   ```javascript
  const msg = new SpeechSynthesisUtterance();
  
  msg.lang;
  msg.pitch;
  msg.rate;
  msg.text;
 
 ```
  
  - We were able to alter the synthesis voice by using these properties and giving it different values. 
  - For the speech API to start running as soon as the page loads, you add the event listener `voicechanged` to `SpeechSynthesis`, where a list of voice options show up.
  
  ```javascript
 speechSynthesis.addEventListener('voiceschanged', populateVoices);
 
 ```
  - To play the voices out loud or to stop the voice, we used the built in `SpeechSynthesis` commands. 
  
 ```javascript
  speechSynthesis.speak(msg);
  speechSynthesis.cancel();
 
 ```

 ### 3. bind
  - Another way of passing an argument to a function from an event listener (besides an anonymous function) is through `bind`.  [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) takes in `this` for the first parameter and then any arguments. 
  - `bind` calls the function in the context of `this` and passes in arguments to it. In our case, we don't need `this` so it's nothing and we pass in `false` as a boolean to stop the voice from speaking.
  
    
 ```javascript
 
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

stopButton.addEventListener('click', toggle.bind(null, false));
 
 ```
  
  
  
  
  
  
