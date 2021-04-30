// Start with strings, numbers and booleans

/* STRINGS */
console.log('----%cStrings---', 'font-size: 15px');
let age = 100;
let age2 = age;
console.log('age:', age);
console.log('age2:', age2);
// Now what happens when we change age?
age = 200;
console.warn('age changed to 200');
console.log('new age: ', age);
console.log('new age2:', age2);

/* NUMBERS */
console.log('----%cNumbers---', 'font-size: 15px');
let myName = 'Sandy';
let name2 = myName;
console.log('name:', myName);
console.log('name2:', name2);
// Now what happens when we change name?
myName = 'Dandy';
console.warn('name changed to Dandy');
console.log('new name:', myName);
console.log('new name2:', name2);

/* ARRAYS */
console.log('----%cArrays---', 'font-size: 15px');
// Let's say we have an array
const players = ['Joey', 'Rachel', 'Monica', 'Ross', 'Chandler'];
console.log('players:', players);

// and we want to make a copy of it.
const team = players;
console.log('team:', team);

// You might think we can just do something like this:
team[3] = 'Phoebe';
// however what happens when we update that array?
console.warn('team member changed to Phoebe');
console.log('team:', team);
console.log('players:', players);

// now here is the problem!
console.error('Both team and players are updated because of references!');

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a COPY instead!
const players2 = ['Joey', 'Rachel', 'Monica', 'Ross', 'Chandler'];

// Slice Method:
console.log('%cSolution #1:', 'font-weight: bold', 'Slice method:');
const team2 = players2.slice();

team2[3] = 'Phoebe';
console.warn('team2 member changed to Phoebe');
console.log('team2 (copy of players):', team2);
console.log('players:', players2);

// Concat Method:
console.log('%cSolution #2:', 'font-weight: bold', 'Concat method:');
const team3 = [].concat(players2);
team3[3] = 'Janice';
console.warn('team3 member changed to Janice');
console.log('team3 (copy of players):', team3);
console.log('players:', players2);

// Spread Method:
console.log('%cSolution #3:', 'font-weight: bold', 'Spread method:');
const team4 = [...players2];
team4[3] = 'Gunther';
console.warn('team4 member changed to Gunther');
console.log('team4 (copy of players):', team4);
console.log('players:', players2);

// Array.from Method:
console.log('%cSolution #4:', 'font-weight: bold', 'Array.from method:');
const team5 = [...players2];
team5[3] = 'Mike';
console.warn('team5 member changed to Mike');
console.log('team5 (copy of players):', team5);
console.log('players:', players2);

/* OBJECTS */
console.log('----%cObjects---', 'font-size: 15px');
// The same thing goes for objects, let's say we have a person object
const person = {
  name: 'Brandon',
  age: 80,
};
console.log('person:', person);

// and think we make a copy:
const captain = person;
console.log('captain:', captain);

// Updating a value in the object
console.warn('captain has been added a new number of 99');
captain.number = 99;

console.log('person:', person);
console.log('captain:', captain);
console.error('Both person and team are updated because of references!');

// How do we take a copy instead?
const person2 = {
  name: 'Brandon',
  age: 80,
};

// Object.assign Method:
console.log('%cSolution #1:', 'font-weight: bold', 'Object.assign method:');
const cap2 = Object.assign({}, person, { number: 99, age: 12 });

console.warn(
  'cap2 has been added a new number of 99, and age was changed to 12'
);
console.log('cap2 (copy of person):', cap2);
console.log('person:', person2);

// Spread Method:
console.log('%cSolution #2:', 'font-weight: bold', 'Spread method:');
const cap3 = { ...person2, state: 'NY' };

console.warn('cap3 has been added a new state of NY');
console.log('cap3 (copy of person):', cap3);
console.log('person:', person2);

console.log('----%cThing to Note---', 'font-size: 15px');
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
console.log(
  '%c*These Array and Object methods only go 1 level deep*',
  'color: green; font-size: 15px'
);
const sandy = {
  name: 'Sandy',
  age: '22',
  social: {
    twitter: '@sandaiiyahh',
    linkedin: 'sandydaii',
  },
};

// Making a "dev" copy of sandy object:
const dev = Object.assign({}, sandy);
// const dev = { ...sandy };

console.warn('dev(copy of sandy) has a new name of Dandy (first level)');
dev.name = 'Dandy';

console.log('sandy:', sandy);
console.log('dev:', dev);

console.warn(
  "dev's twitter handle has been changed to eggomochi (second level)"
);
dev.social.twitter = '@eggomochi';
console.log('sandy.social:', sandy.social);
console.log('dev.social:', dev.social);
console.error('Both sandy and dev twitter handles were updated!');

// Cheat Way: JSON.parse(JSON.stringify())
console.log(
  '%cCheat Solution:',
  'font-weight: bold',
  'JSON.parse(JSON.stringify()):'
);
const sandy2 = {
  name: 'Sandy',
  age: '22',
  social: {
    twitter: '@sandaiiyahh',
    linkedin: 'sandydaii',
  },
};

const dev2 = JSON.parse(JSON.stringify(sandy2));
dev2.social.twitter = '@eggomochi';
console.log('dev2.social (copy of sandy):', dev.social);
console.log('sandy.social:', sandy2.social);
