# ⌨️ Day 6 - Type Ahead

To be honest, this project was a tough one. It packed a lot, from fetch API, to regex, to DOM manipulation. But I've always wanted to know how search bars implement auto suggest features, so this project has been fulfilling to learn!

![type-ahead-demo](https://i.ibb.co/cv1Ldzn/typeahead.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/06-Type%20Ahead/index.html)

## What I Learned

### 1. fetch
 - [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) is used to retrieve data from a url, resulting in a JSON data source. But because it returns just an HTTP response at first, the process involves extracting the initial raw data into JSON using the `.json()` method.
 - For our project, we were fetching for an array of cities data. We had to convert it to JSON before pushing the data into our cities array. 
 
  ```javascript
  const endpoint =
   'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  
  const cities = [];
  
  fetch(endpoint)
   .then((blob) => blob.json())
   .then((data) => cities.push(...data));
}
 
  ```

### 2. Regular Expressions
 - [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions), or regex, are patterns used to match character combinations in strings. This would be perfect for identifying phone number formats, email formats, etc.
 - In order to create a regular expression, we can use the `RegExp` method.
  ```javascript
   const regex = new RegExp(this.value, 'gi');  // g is global (matches all instances of the pattern in a string) and i is case-insensitive
  ```
 - For our project, we were trying to return cities or states that matches any input typed into the search bar.
 - The `match()` method compares a string against a regular expression.
  ```javascript
   return place.city.match(regex) || place.state.match(regex);
  ```
 - The `replace()` method in conjunction with regex stumped me the most, as I was confused with the syntax. But after reading this [article](https://www.freecodecamp.org/news/javascript-string-replace-example-with-regex/#:~:text=To%20use%20RegEx%2C%20the%20first,replaced%20with%20the%20new%20substring.&text=The%20string%203foobar4%20matches%20the,%2F%20%2C%20so%20it%20is%20replaced.), I understood our code a bit better.
 - In our case, we were using regex to find any part of the city/state that matches the input, and then replacing that city/state to include an element that incorporates a highlight to the matching text.
  ```javascript
    const regex = new RegExp(this.value, 'gi');
         
    const cityName = place.city.replace(regex,`<span class="hl">${this.value}</span>`);
  ```
 
 
 
 
 
 
 
 
