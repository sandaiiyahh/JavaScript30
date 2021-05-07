// Speech Recognition
// Chrome: lives on webkit
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// Create new instance of speech recognition
const recognition = new SpeechRecognition();
recognition.interimResults = true; // lets you see what you are speaking as you are speaking

// Creates a paragraph
let p = document.createElement('p');
// Select 'words' div class
const words = document.querySelector('.words');
words.appendChild(p); // create first p

recognition.addEventListener('result', (e) => {
  const transcript = e.results[0][0].transcript;

  // Display transcript on DOM
  p.textContent = transcript;

  // Add a NEW p element if result is final
  if (e.results[0].isFinal) {
    // Overwrite p from line 11
    p = document.createElement('p');
    words.appendChild(p);
  }
  if (transcript.match(/refresh (?:the\s)*page/)) {
    location.reload();
  }
});

// Event listener that triggers recognition AGAIN after first is done speaking
recognition.addEventListener('end', recognition.start);

recognition.start();
