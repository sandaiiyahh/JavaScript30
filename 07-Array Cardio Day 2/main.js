const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

/* -------Some and Every Checks------- */

// .some() checks if AT LEAST one thing in array meets your condition
// Is AT LEAST one person 19 or older?
const isAdult = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log({ isAdult });

// .every() checks for everyone
// Is EVERYONE 19 or older?

const allAdults = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log({ allAdults });

/* ------Find------- */

// .find() is like filter, but instead returns just the one you are looking for
// Find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
