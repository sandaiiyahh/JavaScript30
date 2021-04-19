# 🏃‍♀️ Day 4 - Array Cardio Day 1

Day 4 consisted of practicing the fundamentals: array methods! I really appreciate this project, because I was able to go back and familiarze myself again with key array concepts. 

![array-cardio-demo](https://i.ibb.co/5hXpvPt/Screen-Shot-2021-04-18-at-3-38-27-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/04-Array%20Cardio%20Day%201/index.html)

## What I Learned

### 1. `console.table`
 - I used this method over `console.log` to display all my answers. It was perfect because it allowed me to better visualize each value in the array.

### 2. filter
 - [`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) creates a *new* array with all the elements that match the condition that was passed in the callback function.
 
 ```javascript
  const fifteen = inventors.filter(
   (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
  ```
  
### 3. map
 - [`Array.prototype.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) also creates a *new* array, but this time, you are calling your own function on the old array and returning a brand new, modified array.
 - In our project, our original array was an array of inventor objects. But after using the map method on it, we were able to create a brand new array that displays the extracted first and last names of each inventor.

 ```javascript
  const fullNames = inventors.map(
   (inventor) => `${inventor.first} ${inventor.last}`
);
  ```

### 4. reduce
 - [`Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) is probably the most flexible array method, as you can change the output to a value *other than* an array (ex. integer, string, object, etc).
 - The method executes a callback, which usually takes in 2 required arguments: an **accumulator** (this is what accumulates the values in each iteration) and the **current value** (the current element being processed in the array). 
 - The **initial value** helps determine what value type will be returned. (ex. 0 for integer, {} for object)
 - I always struggled with this method, but luckily, we went over two simple use cases that made me comprehend it better. 
 
  ```javascript
  
 // Returns an integer value 
 const totalYears = inventors.reduce((total, inventor) => {
   return total + (inventor.passed - inventor.year);
}, 0); 

// Returns an object 
const transportation = data.reduce((obj, item) => {
  if (!obj[item]) obj[item] = 0;
   obj[item]++;
   return obj;
}, {});
  ```
  
### 5. sort
 - [`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) mutates the *original* variable as it sorts the elements in place and returns the sorted array.
 - While I did learn about this method before, I never went in depth into it as I did in this project. From this, I learned more about how exactly 2 elements are being compared.
 - If the first element (a) is less than the second element (b), the first element comes first. Otherwise, if the first element is greater, the second element comes first. If the two elements are the same, no swap is necessary.
 
  ```javascript
  // People sorted alphabetically by last name
people.sort((lastPerson, nextPerson) => {
   return lastPerson > nextPerson ? 1 : -1;
   });
 
 // Inventors sorted by oldest to youngest (by birthdate)
 inventors.sort((a, b) => a.year - b.year);
 
 /* -------------- */
 
 // Inventors sorted by years lived (longest to shortest)
 inventors.sort((a, b) => {
   let lastPerson = a.passed - a.year;
   let nextPerson = b.passed - b.year;
   return lastPerson > nextPerson ? -1 : 1; // OR return nextPerson - lastPerson;
 });
 
  ```
 
