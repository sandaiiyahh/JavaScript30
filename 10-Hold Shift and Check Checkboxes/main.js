// Listen for checkbox being checked

// We need to know the previous checkbox checked
let lastChecked;

function handleCheck(e) {
  // Check if shift key was pressed down AND if they are checked
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // Loop through every single checkbox
    checkboxes.forEach((checkbox) => {
      // If checkbox is equal to this (the one just checked) OR the box that was checked prior
      if (
        (checkbox === this || checkbox === lastChecked) &&
        lastChecked !== this
      ) {
        // Toggle inBetween (toggle so we know when to finish)
        inBetween = !inBetween;
      }
      // For each checkbox, if inBetween was toggled TRUE, check off that box
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this; // initialized before and now we save the previously checked box
}

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheck)
);
