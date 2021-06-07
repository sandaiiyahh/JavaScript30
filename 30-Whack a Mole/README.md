# 🔨 Day 30 - Whack a Mole

Last day, I made it! I really enjoyed learning the powerful tools built right into JavaScript to build such useful, real world applications. I definitely understand and feel more comfortable with using JavaScript now, so I am grateful for Wes Bos for creating this course. 

For our final project, we finished off with a fun classic game. Using event listeners and functions, it was fascinating to see exactly how this game was built. 

![whack-a-mole-demo](https://i.ibb.co/YQsQD4T/Screen-Shot-2021-06-06-at-9-01-34-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/30-Whack%20a%20Mole/index.html)


## What I Learned

### 1. `isTrusted`
 - [`isTrusted`](https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted) is an event property that is a boolean. It lets you know if an event was truly triggered by a user action. 
 - I never knew of this property, so it was cool that it was applicable in our project. We used `isTrusted` to make sure the user did not fake any clicks on hitting the moles, which could be done through using code. 
 
 ```javascript
 
// Function that tracks how many moles you hit
function bonk(e) {
  if (!e.isTrusted) return;

  score++; // Otherwise, increase the score
}

```

### 2. Recursion 
 - Recursion had always been associated with data structures and algorithms to me, so it was very cool to be able to incorporate recursion onto our project. 
 - We used recursion to make sure a mole was not peeping out of the same hole again. To do that, we also declared a global variable to store the last variable and compare this last one with the current one. If they were the same, we simply ran the function again. 
 It will keep calling the function until the `hole !== lastHole`. 
 
 ```javascript
 
let lastHole;

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (hole === lastHole) {
    return randomHole(holes); // recursion
  }

  // Save the previous hole
  lastHole = hole;
  return hole;
}

```





