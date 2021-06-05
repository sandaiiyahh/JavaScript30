# ⏲️ Day 29 - Countdown Timer

Just one more day to go! In today's project, I built a countdown timer for the first time! It was cool to be able to build one using plain JavaScript, with functions, intervals, and event listeners.


![countdown-timer-demo](https://i.ibb.co/grw04p6/Screen-Shot-2021-06-05-at-5-40-04-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/29-Countdown%20Timer/index.html)

## What I Learned

### 1. clearInterval
 - In conjunction with `setInterval`, [`clearInterval`](https://www.w3schools.com/jsref/met_win_clearinterval.asp) clears the timer set and stops it.
 - In our project, we used this method twice, once to stop the timer from going past 1 second, and another time to prevent two functions from running its intervals at once. 
 
 ```javascript

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown); // countdown is a variable assigned to the setInterval function
      return;
    }
    
  });

```

 - An important thing to note is if you trying to stop a timer from hitting past 0, make sure to `return` right after you clear the interval. Otherwise, the timer will still hit -1. 
 
 ### 2. Date.now() vs new Date()
  - In our [Day 2 Project](https://github.com/sandaiiyahh/JavaScript30/blob/main/02-JS%20and%20CSS%20Clock/README.md), we used `new Date()` before to extract the minutes, seconds, and hours. This project, we used both `newDate()` and `Date.now()`.
  
     <img src="https://i.ibb.co/WKqbtck/Screen-Shot-2021-06-05-at-6-30-02-PM.png" width="500" />
  - `newDate()` creates a new date object with the current date and time. We used this to create a date object out of our milliseconds end time stamp. 
   
 ```javascript
 
 function displayEndTime(timestamp) {
  const end = new Date(timestamp);

  let hour = end.getHours(); // get hours
  const minutes = end.getMinutes(); // get minutes
}


```

  - `Date.now()` returns the number of milliseconds since `01/01/1970`, which is the date when the time first started for Unix computers. We used this time in milliseconds to calculate the time stamp of when the timer would end, as well as the amount of seconds left.

  ```javascript
  
  const now = Date.now();

  const then = now + seconds * 1000; // Multiply by 1000 to convert back to milliseconds


```

 ### 3. `querySelector` Alternative
  - Instead of using `querySelector` to select an HTML element, you can also attach a `name` attribute to the element and it would now be accessed from the `document` object.
  - Because we had a form in our project, this method of grabbing the form made it convenient, as we could just attach an event listener right away. 
  
   ```HTML
  
   <form name="customForm" id="custom">
	   <input type="text" name="minutes" placeholder="Enter Minutes">
   </form>

   ```
    
   ```javascript
  
   document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
      const mins = this.minutes.value;
  });

   ```
 
 
 
