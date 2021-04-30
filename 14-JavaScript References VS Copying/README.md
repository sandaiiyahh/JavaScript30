# 📋 Day 14 - JavaScript References Vs Copying

Today's project guided us back to the basics, in solidifying our understanding references compared to copies. I personally love the refresher and had fun styling the Chrome console using what I learned from [Day 9's project](https://github.com/sandaiiyahh/JavaScript30/tree/main/09-Dev%20Tools%20Domination).

![reference-copy-demo](https://i.ibb.co/5vMwgCV/Screen-Shot-2021-04-30-at-5-06-37-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/14-JavaScript%20References%20VS%20Copying/index.html) 
(option + ⌘ + J on macOS or Shift + CTRL + J on windows to see Chrome console!)

## What I Learned

### 1. Primitive Data Types are immutable
 - Primitive data types, such as string, number, boolean, null, and undefined, cannot be changed. Instead, they are copied or re-assigned. 
 - In our case, we saw this happen when we created a new variable from a primitive type variable. The new variable remained the same even when we changed the original.
 
```javascript
let age = 100;
let age2 = age; 

// Now what happens when we change age?
age = 200;

console.log('new age: ', age);  // 200
console.log('new age2:', age2); // 100 (not affected by age)

// What happens if we change age2 instead?
age2 = 200;

console.log('new age: ', age);  // 100 (not affected by age2)
console.log('new age2:', age2); // 200

 ```
 
### 2. Object Types are passed by/assigned by reference
 - Object types include objects, arrays, and functions. Whenever you assign a new variable to an object, you are passing a *reference*, or address to it, instead of the value. 
 - You can see this happen here, where both objects are updated:
 
```javascript
const players = ['Joey', 'Rachel', 'Monica', 'Ross', 'Chandler'];

const team = players;
team[3] = 'Phoebe';

console.log('team:', team);  // ['Joey', 'Rachel', 'Monica', 'Phoebe', 'Chandler']; 
console.log('players:', players); // ['Joey', 'Rachel', 'Monica', 'Phoebe', 'Chandler'];

 ```
 
### 3. Four Ways to Copy an Array
 - There are 4 ways to copy an array, which avoids us creating a reference to the array. Changing these arrays will not affect the original array.
 
```javascript
// Slice Method:
const team2 = players.slice();

// Concat Method:
const team3 = [].concat(players2);

// Spread Method:
const team4 = [...players2];

// Array.from Method:
const team5 = Array.from(players2);

 ```
 
 ### 3. Two Ways to Copy an Object
  - Copying can also be done with objects as well. Two methods to copy objects are `Object.assign` and the ES6 spread operator. 
  - [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), in particular, was unfamiliar to me, so it was nice to know how it works. The first parameter is an empty object, followed by the object you would like to copy all of the properties from, and finally, any additional changes you would like to add. The third parameter is optional.
  
```javascript
const person = {
  name: 'Brandon',
  age: 80,
};

// Object.assign Method:
const cap2 = Object.assign({}, person, { number: 99, age: 12 });  // {name: 'Brandon', age: 12, number: 99}

// Spread Method:
const cap3 = { ...person2, state: 'NY' }; // {name: 'Brandon', age: 12, state: 'NY'}

 ```
 
 ### 4. Array and Object Copy Methods only make *shallow* copies
  - The methods I just listed above only work for properties that are 1 level deep. So if we were working with a nested object and we were trying to change a nested property, the original array will still be affected.
  - A cheap way, according to Wes Bos, to go about this is using JSON serialization and parsing. It returns a string, and parses it to turn it back to an object, which removes any references. While this method works, it can lead to performance issues.
  
 ```javascript
const sandy = {
  name: 'Sandy',
  age: '22',
  social: {
    twitter: '@sandaiiyahh',
    linkedin: 'sandydaii',
  },
};

const dev2 = JSON.parse(JSON.stringify(sandy));

console.log('dev2.social:', dev.social); // {twitter: '@eggomochi', linkedin: 'sandydaii' }
console.log('sandy.social:', sandy.social); // {twitter: '@sandaiiyahh', linkedin: 'sandydaii' }

 ```
 
 
 
