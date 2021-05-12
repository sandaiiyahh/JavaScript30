// Information about how fast, pitch, voice, of message
const msg = new SpeechSynthesisUtterance();

// Where our voices will be placed into
let voices = [];

// Selectors for the different input options & buttons
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

// Make whatever message is in the box the default msg
msg.text = document.querySelector('[name="text"]').value;

// Adds list of voice options from speechSynthesis onto our dropdown
function populateVoices() {
  voices = this.getVoices(); // we get back a bunch of different voices

  // Set each voice as an option in our dropdown
  voicesDropdown.innerHTML = voices
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>"`
    )
    .join('');
}

// Select a voice from dropdown that will speak our msg
function setVoice() {
  // Find the voice object whose object name matches the value of the option
  msg.voice = voices.find((voice) => voice.name === this.value);
  // Run function that restarts the voice
  toggle();
}

// Function that restarts voice every time option value changes
function toggle() {
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
}

function setOption() {
  // console.log(this.name, this.value) // lets us see the name of input changed and the value
  msg[this.name] = this.value;
  toggle(); // start everything over again with this new change
}

// Listen for when voices load
speechSynthesis.addEventListener('voiceschanged', populateVoices);

// Listen for a different selection in dropdown
voicesDropdown.addEventListener('change', setVoice);

// Listen for change in each of our options (rate, pitch, textarea)
options.forEach((option) => option.addEventListener('change', setOption));
