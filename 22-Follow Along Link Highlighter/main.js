// Select every single link on the page
const triggers = document.querySelectorAll('a');

// Make highlight
const highlight = document.createElement('span');
highlight.classList.add('highlight'); // make 'highlight' class
document.body.append(highlight); // add highlight into DOM

// Listen for when someone enters a link
function highlightLink() {
  // Save the link coordinates that was triggered into a variable
  const linkCoords = this.getBoundingClientRect();

  // Find out how far user has scrolled and factor in that to the position coordinates
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  // Style the size of highlight
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;

  // Style the positioning of the highlight
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// Listen for mouseenter for each of triggers
triggers.forEach((a) => a.addEventListener('mouseenter', highlightLink));
