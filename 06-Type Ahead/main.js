const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// Alternative using async/await :

// (async function fetchCities(url) {
//     let response = await fetch(url);
//     let data = await response.json();
//     cities = data;
//   })(endpoint);

// Uses fetch API to fetch data from endpoint
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

// Function that matches inputted text with a city or state
function findMatches(wordToMatch, cities) {
  // Each place in cities has a "city", "state", and "population" key
  return cities.filter((place) => {
    // Figure out if city or state matches input
    const regex = new RegExp(wordToMatch, 'gi'); // g = global; i = insensitive
    // Find match in either city or state
    return place.city.match(regex) || place.state.match(regex);
  });
}

// Adds commas to population
// function numberWithCommas(data) {
//   return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

function displayMatches() {
  // Returns array of place objects that match the input
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, 'gi');
      // For each place that match the regex, replace its regex with span of class of hl
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${Number(
          place.population
        ).toLocaleString()}</span>
      </li>`;
    })
    .join(''); // converts array into one neat HTML string
  suggestions.innerHTML = html;
}

// Selecting search bar to get its input
const searchInput = document.querySelector('.search');

// Selecting suggestions dropdown. This will change dynamically depending on the input
const suggestions = document.querySelector('.suggestions');

// Listening for input change
searchInput.addEventListener('input', displayMatches);
