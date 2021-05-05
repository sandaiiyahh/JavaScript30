# ➕ Day 18 - Adding Up Times With Reduce

Today was less attention on the CSS and more focus on the JavaScript methods. Today, I worked with `.reduce()` to tally up the hours, minutes, and seconds of a list of videos. 

![adding-up-times-demo](https://i.ibb.co/KFCVv4H/Screen-Shot-2021-05-05-at-5-57-17-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/18-Adding%20Up%20Times%20With%20Reduce/index.html)

## What I Learned

### 1. Destructuring with `split`
 - If you have data structured in "mm:ss" format, you can conveniently strip minutes and seconds by using `split()` and destructuring. 
  <img src="https://i.ibb.co/mbFNgtJ/Screen-Shot-2021-05-05-at-6-12-28-PM.png" width="1500" />
  
 ```javascript
 
 const totalSeconds = timeAttributes
   .map(node => node.dataset.time)
   .map(timeCode => {
   const [mins, secs] = timeCode.split(':');
 ```
 - Here, we are splitting the data `["5:43"]` by `:` and declaring the left side to be called `mins` with the right side to be `secs`. 

### 2. parseFloat as a function argument
 - One thing to note is that each of the times inside the array is in string format. As a result, we would have to convert each of the minutes and seconds into numbers.
 - Instead of initializing a variable for each minute and second and calling `parsefloat()` on it, you can simply pass `parseFloat()` as a function inside the map function. This will convert each string to a number.
   
 ```javascript
 
   const [mins, secs] = timeCode.split(':').map(parseFloat);
 ```
 <img src="https://i.ibb.co/DrdjnhK/Screen-Shot-2021-05-05-at-6-32-14-PM.png" width="400" />
 
