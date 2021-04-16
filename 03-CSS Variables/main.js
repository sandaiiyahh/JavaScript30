// Selecting all the input element under the .controls class
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // Taking the 'px' from the spacing/blur input OR if it's a color picker input, suffix is an empty string
  const suffix = this.dataset.sizing || '';

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix // adds suffix ('px') onto the end of value
  );
}

// Listens for changes to the value of any of the input elements
inputs.forEach((input) => input.addEventListener('input', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
