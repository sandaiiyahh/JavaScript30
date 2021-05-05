# 🗄️ Day 17 - Sort Without Articles

With today's simple project, it was really rewarding to implement what we learned from previous days to complete it! This project involved sorting a list of bands in ascending order, disregarding articles.

![sort-without-articles-demo](https://i.ibb.co/ZRj89rK/Screen-Shot-2021-05-04-at-9-44-26-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/17-Sort%20Without%20Articles/index.html)

## What I Learned

### 1. Regular Expressions Symbols
  - We implemented regex before in [Day 6](https://github.com/sandaiiyahh/JavaScript30/tree/5584b8193eada21d07d8f9bbe47bf6db1325ed8f/06-Type%20Ahead), but this time, we got to learn about other symbols.
  
```javascript
  function strip(bandName) {
       return bandName.replace(/^(an?|the)\s+?/i, '');
   }

 ```
 - In our project, we were trying to remove any articles from the `bandName`. Articles include "the", "a", or "an".
   - `^` represents the start of the string
   - `|` is the OR operator
   - `?` allows for an optional preceding character. In our case `an?` accounts for both "an" and "a" articles
   - `\s` accounts for white spaces
   - `/i` allows for case-insensitive matching, so articles like "tHe" or "An" still apply
   
### 2. `trim`
 - The [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) method removes any white spaces from both ends of a string.
 - In our case, we were accounting for any possible white spaces that may appear on the `bandName`. I have not seen this method used in a while, so while you can use regex to target white spaces, `trim()` also works!
