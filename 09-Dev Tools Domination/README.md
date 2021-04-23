# 👑 Day 9 - Dev Tools Domination

Today was all about the Chrome DevTools. There is more to just `console.table`, as we learned about several other cool nifty tricks Chrome DevTools has designed for us.

![dev-tools-demo](https://i.ibb.co/8M9cJT0/Screen-Shot-2021-04-23-at-4-34-05-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/09-Dev%20Tools%20Domination/index.html)

## What I Learned

### 1. `%s` String Substitution
 - Similiar to C programming language, you can insert a value wherever you placed `%s` at. 
 - I am probably still going to use template literals as I find it easier, but it is nice to learn about other options!
 ```javascript
 console.log('Hello, I was made using %s', 'interpolation 🤯.');
 
  ```
  
### 2. `%c` Styling Strings
 - You can style the text you logged to the console with `%c`. 
  ```javascript
 console.log('%cWoah, I just styled a console log!','font-size: 45px; color: black; text-shadow: 3px 3px 0 green');
 
  ```
  
### 3. Console Warnings, Errors, and Assertions
 - Chrome DevTools allows you to conveniently place warnings and errors in your console with `console.warn` and `console.error`. 
 ```javascript
console.warn('This is a warning!'); // warning!

console.error('I warned ya. And now you errored.'); // error
 
  ```
 - `Console.assert` could be an useful debugging tool, as it only prints a warning to the console when whatever is passed to it is *false*. 
 - You can use this method to check the DOM!
 ```javascript
console.assert(typeof 5 === 'number', 'I will not run because you are correct!');

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'Our p tag does not contain an ouch!'); // this will run
  ```
 
 ### 4. Grouping Outputs
  - When outputs of a loop get long but you still would like to see each output, you can use `console.group` to place each instance into different tabs on the console.
  - To create a group, you declare `console.group`, passing it in a label, and end it with `console.groupEnd()`. Make sure you are passing the same label in both methods!
  
  ```javascript
const dogs = [
   { name: 'Snickers', age: 2 },
   { name: 'hugo', age: 8 },
];

dogs.forEach((dog) => {
   console.group(`${dog.name}`); // the label for each instance is the dog's name
   console.log(`This is ${dog.name}.`);
   console.log(`${dog.name} is ${dog.age} years old.`);
   console.groupEnd(`${dog.name}`); // pass in that same label in console.groupEnd()!
});

  ```
 
 ### 5. Timing An Operation
  - You can actually time how long an operation takes right from your console!
  - Just make sure when you are calling `console.timeEnd()` to pass in the same name you declared inside `console.time()`. 
 
  ```javascript
 console.time('How long does it take to fetch my github?: ');
 fetch('https://api.github.com/users/sandaiiyahh')
   .then((data) => data.json())
   .then((data) => {
    console.timeEnd('How long does it take to fetch my github?: ');
    console.log(data); // outputs time in milliseconds here
  });

  ```
 
 
 
 
 
