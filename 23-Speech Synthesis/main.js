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
msg.text = document.querySelector('[name="text"]');

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

// Listen for a voice change
speechSynthesis.addEventListener('voiceschanged', populateVoices);
