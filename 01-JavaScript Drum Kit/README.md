# 🥁 Day 1 - JavaScript Drum Kit 
Through this first mini project, I brushed up on DOM manipulation as we created a drum application that played different sounds corresponding to the keys on our keyboard.

![alt text](https://i.ibb.co/qMfXsK8/drumkit.png)

## What I Learned

### 1. data-* Attribute
 - HTML [data-*](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) attributes allows us to store extra information on any HTML element. Because of this, we were able to attach a `data-key` attribute that connects our `div.key` and `audio` elements.
 
 ```html
<div data-key="65" class="key">
        <kbd>A</kbd>
        <span class="sound">clap</span>
</div>

<audio data-key="65" src="sounds/clap.wav"></audio>

```

### 2. `kbd` HTML Tag
  - I've never seen this tag before! Turns out, the [kbd](https://www.w3schools.com/tags/tag_kbd.asp) tag is actually used for keyboard inputs. This was relevant in our case to better label our code with keyboard letters.
  
### 3. querySelector & Attribute Selectors
  - I've learned about querySelectors before, but it was a good refresher since I was reminded [querySelectors](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) only return the *first* element. 
  - For our project, we needed to return the specific element with the selected `data-key` attribute, so it was great to learn about [attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors), which gave us the matching element based on the given attribute.
  
  ```javascript
  
  const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);

  ```
  
  ### 4. classList
   - It continues to fascinate me that you can modify elements! In our case, we were able to add and remove a class from an element using [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#examples). 
   
   ```javascript
  
    key.classList.add('playing');
    key.classList.remove('playing');
    key.classList.toggle('playing');

   ```
   
   ### 5. transitionend
   - [transitionend](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event) is a type of event that gets fired after a CSS transition has ended. It was convenient to be able to use this to remove a class quickly. 
   
   ```javascript
  
   key.addEventListener('transitionend', () => {
     key.classList.remove('playing');
   });

   ```
   
  
  
