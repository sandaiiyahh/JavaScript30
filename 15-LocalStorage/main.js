// Grab Form and Plates display list
const addItems = document.querySelector('.add-items'); // the form
const itemsList = document.querySelector('.plates');
// Items is either the local storage array of item objects OR an empty array
const items = JSON.parse(localStorage.getItem('items')) || [];

// Function that adds input to items array
function addItem(e) {
  e.preventDefault(); // prevents form from refreshing
  // Get the input element of what user typed's VALUE:
  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false,
  };
  // Push item object to items array
  items.push(item);
  populateList(items, itemsList);
  // Add items array to local storage! (make sure to stringify because it doesnt accept objects)
  localStorage.setItem('items', JSON.stringify(items));
  this.reset(); // resets form element (built in method)
}

// Function that displays input onto list
function populateList(plates = [], platesList) {
  // Map over items array and add each list item onto itemsList
  platesList.innerHTML = plates
    .map((plate, idx) => {
      return `
      <li>
        <input type="checkbox" data-index=${idx} id="item${idx}" ${
        plate.done ? 'checked' : ''
      }/>
        <label for="item${idx}">${plate.text}</label>
      </li>
    `;
    })
    .join(''); // returns array into one big string (needed for HTML)
  console.log(platesList);
}

// Function that can persist any checks of items
function toggleDone(e) {
  // If user did NOT click on the checkbox input, return
  if (!e.target.matches('input')) return;
  // Get index of item checkbox that was checked (thanks to our data-index attribute)
  const index = e.target.dataset.index;
  // Set the done property of item object to its OPPOSITE
  items[index].done = !items[index].done;
  // Reupdate list on localStorage
  // Visually update the list on our page
  localStorage.setItem('items', JSON.stringify(items));
}

// Event Listeners:
addItems.addEventListener('submit', addItem); // submit better than click for forms
itemsList.addEventListener('click', toggleDone); // listen for click on the PARENT class, plates

// For local storage purpose: displays previously stored items onto list
populateList(items, itemsList);
