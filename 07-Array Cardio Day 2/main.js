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
console.log('Is at least one person an adult?:');
console.table({ isAdult });

// .every() checks for everyone
// Is EVERYONE 19 or older?

console.log('Is everyone an adult?');
const allAdults = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.table({ allAdults });

/* ------Find------- */
// .find() is like filter, but instead returns just the one you are looking for
// Find the comment with the ID of 823423
const comment = comments.find((comment) => comment.id === 823423);

console.log('Find comment with ID 823423:');
console.table(comment);

/* ------findIndex------- */
// .findIndex() helps you find where something is in the array
// Find the comment with ID 823423
const index = comments.findIndex((comment) => comment.id === 823423);

console.log('Find index with comment ID 823423:');
console.log(index);

/* ------Delete Something From Array------- */
// Delete the comment with the ID of 823423
// Method 1: .splice(), although it mutates the original comments array
// comments.splice(index, 1);

// console.log('Delete that comment from array:');
// console.table(comments);

// Method 2: Slice & Spread operator, which creates a new array and stores the updated values
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.log('Delete that comment from array:');
console.table(newComments);

console.log('Old comments array:');
console.table(comments);
