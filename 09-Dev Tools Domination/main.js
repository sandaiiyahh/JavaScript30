const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello, I am a regular text.');

// Interpolated
console.log('Hello, I was made using %s', 'interpolation 🤯.');

// Styled
// Put %c in front of thing you want to style
console.log(
  '%cWoah, I just styled a console log!',
  'font-size: 45px; color: black; text-shadow: 3px 3px 0 green'
);

// Warning!
console.warn('This is a warning!');

// Error :|
console.error('I warned ya. And now you errored.');

// Info
// Note: console.info icon has been removed
// console.info('Fact: Crocodiles eat 3-4 people per year.');

// Testing
// console.assert would only fire if something is wrong
console.assert(
  typeof 5 === 'number',
  'I will not run because you are correct!'
);
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'Our p tag is NOT hurt!');

// Clearing
// console.clear(); // clears console

// Viewing DOM Elements
console.log('console.log shows you the element:');
console.log(p);

console.log('console.dir allows you to see a detailed dropdown:');
console.dir(p); // lets you see available methods & properties

// Grouping together
console.log('--------Grouping---------');
dogs.forEach((dog) => {
  console.group(`${dog.name}`); // pass in what you want to group it by
  // console.groupCollapsed(`${dog.name}`) // same as console.group, but starts off collapsed
  console.log(`This is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(`${dog.name}`); // when you're done, pass in the same name you grouped them by
});

// counting
console.log('--------Counting---------');
// Counts how many times a call to count was called
console.count('Sandy');
console.count('Sandy');
console.count('Day 9');
console.count('Sandy');
console.count('Sandy');
console.count('Sandy');
console.count('Day 9');
console.count('The console is cool!');

// Timing
console.log('--------Timing---------');
// See how long something took
console.time('How long does it take to fetch my github?: ');
fetch('https://api.github.com/users/sandaiiyahh')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('How long does it take to fetch my github?: ');
    console.log(data);
    // Tables
    console.log('--------Tables---------');
    console.table(dogs);
  });
