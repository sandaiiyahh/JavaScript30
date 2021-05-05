const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

// Function that removes articles
function stripArticles(bandName) {
  return bandName.replace(/^(an?|the)\s+?/i, '');
}

// Sort band names in ascending order:
const sortedBands = bands.sort((a, b) =>
  stripArticles(a) > stripArticles(b) ? 1 : -1
);

// Select list
const bandsList = document.querySelector('#bands');

// Change inner HTML of list
bandsList.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join('');
