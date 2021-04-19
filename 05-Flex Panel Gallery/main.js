const panels = document.querySelectorAll('.panel');

// Function runs whenever a click is heard
function toggleOpen() {
  this.classList.toggle('open');
}

// Function runs after transition ends
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

// Loop over each panel and listen for a click for each panel
panels.forEach((panel) => panel.addEventListener('click', toggleOpen));

// Loop over panel and listen for transition end for each panel
panels.forEach((panel) =>
  panel.addEventListener('transitionend', toggleActive)
);
