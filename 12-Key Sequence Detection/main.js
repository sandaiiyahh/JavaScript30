// Listen for whenever we enter a key on our keyboard
// Push whatever they pressed into an array
// Compare array with secret code

const pressed = [];
const secretCode = 'sandaiiyahh';
console.log('Hint: What is my github username? 👀');

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);

  // Cut off first letter of array if length is longer than secretCode length
  pressed.splice(0, pressed.length - secretCode.length);

  // Check if input is equal to secret code to unlock surprise!
  if (pressed.join('') === secretCode) cornify_add();
});
