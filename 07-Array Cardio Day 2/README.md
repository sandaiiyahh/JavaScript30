# 💦 Day 7 - Array Cardio Day 2

Another fundamental Array methods workout! I love the refresher on these not as commonly used, but still just as helpful methods! In this exercise, we practiced .every(), .some(), .find(), as well as new ones for me like .findIndex().

![array-cardio-day2-demo](https://i.ibb.co/qgPvHKs/Screen-Shot-2021-04-21-at-4-40-44-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/07-Array%20Cardio%20Day%202/index.html)

## What I Learned

### 1. some
 - [`Array.prototype.some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) returns `true` if *at least* one item meets the specified condition. 
 - For this exercise, I also learned `new Date().getFullYear()` returns the current year.
 
  ```javascript
const isAdult = people.some((person) => new Date().getFullYear() - person.year >= 19);
 
  ```
### 2. every
 - On the other hand of `.some()`, [`Array.prototype.every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) returns 'true' if *all* of the items meet the specified condition.
 
 ```javascript
const allAdults = people.every((person) => new Date().getFullYear() - person.year >= 19);
 
  ```
### 3. find
 - [`Array.prototype.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) is similiar to `.filter()`,  but instead of returning a subset of values, it returns the *first* item in the array that meets the specified condition. 
 - In our case, we used `.find()` to retrieve the comment that matched a specified ID. 
 
 ```javascript
const comment = comments.find((comment) => comment.id === 823423);
 
  ```

### 4. findIndex
 - `Array.prototype.findIndex()` extends off of `.find()`, but instead, returns the *first* index of the item in the array that meets the specified condition.
 - In our exercise, there was only one value that met the condition, so this is still a nifty method to use when needing to find the index given a value, similiar to `.indexOf()`.
  
 ```javascript
const index = comments.findIndex((comment) => comment.id === 823423);
 
  ```
  
### 5. Splice vs Slice & Spread Syntax
 - When deleting an item off an array, [`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) is perfect if you don't mind mutating the original array. 
 - But if you don't want the array to change, you can create a new array that only includes the updated values, leaving out the element you want to remove.
 
 ```javascript
 // Splice method:
 comments.splice(index, 1);
 
 // Slice & Spread Syntax method:
 const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
 
 /* --------- */
 
 // Bonus: Splice method & Spread Syntax method (no mutations to old array)
 const newComments = [...comments];
 newComments.splice(index, 1);
 
  ```
  
  
  
  
  
