# 🧭 Day 21 - Geolocation

Today's project involves tracking a user's location and updating the compass and speedometer. It was cool that XCode simulator was able to give actual data to run this project on. 

![geolocation-demo](https://i.ibb.co/QPzbShn/Screen-Shot-2021-05-10-at-4-41-50-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/21-Geolocation/index.html)

## What I Learned

### 1. `Navigator.geolocation`
 - To get the position of your device, you can use [`Geolocation.getCurrentPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition).
 - For our case, we used `Geolocation.watchPosition()` which also returns data on your device's position, but also automatically updates each time the position of the device changes.
 - The method also accepts an error handling callback function, in case grabbing the geolocation fails. 
 
 ```javascript
 
navigator.geolocation.watchPosition((data) => {
  ...
    }, (err) => {
    console.error(err);
    alert('Hey! You gotta let us track your location for this to work!');
  }
);

 ```
 
 ### 2. `data.coords`
  - The `Navigator.geolocation` methods also take in a `data` object as a parameter, in which you can find details such as the latitude, longitude, and heading.
  - In our project, we used `data.coords.speed` to retrieve the speed in kilometers as well as the `data.coords.heading`, which is the number of degrees relative north. 
  
   ```javascript
 
navigator.geolocation.watchPosition((data) => {
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  }
);

 ```
