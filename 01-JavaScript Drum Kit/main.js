// Listening for key-down event
window.addEventListener('keydown', (e) => {
  // Selecting the associated audio element
  const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
  if (!audio) return; // stops function from running

  // Rewind audio to start and play
  audio.currentTime = 0;
  audio.play();

  // Selecting the associated div element with class of "key"
  const key = document.querySelector(`.key[data-key = '${e.keyCode}']
    `);
  key.classList.toggle('playing'); // toggles on/off 'playing' class to key

  // Listens for when transition on key element ends
  key.addEventListener('transitionend', () => {
    key.classList.remove('playing'); // remove 'playing' class off key
  });
});
