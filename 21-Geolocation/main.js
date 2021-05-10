const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

// Listen for user's position
navigator.geolocation.watchPosition(
  (data) => {
    // watchPosition watches it over time
    // Update to show on DOM
    speed.textContent = data.coords.speed;
    // Rotate the compass
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    console.error(err);
    alert('Hey! You gotta let us track your location for this to work!');
  }
);
