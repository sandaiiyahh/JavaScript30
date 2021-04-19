# 💪 Day 4 - Flex Panel Gallery

I really enjoyed this project, as I did with all of the ones so far. But in particular, I love how this one incorporates previous lessons we learned to create a simple dynamic image gallery.

![flex-gallery](https://i.ibb.co/2g4cvNm/gallery.png)

# Demo Link
View demo [here](http://sandaiiyahh.github.io/JavaScript30/05-Flex%20Panel%20Gallery/index.html)

## What I Learned

### 1. flex
 - One of my worst fears in CSS. In our project, I learned more about flex, a shorthand property for `flex-grow`, `flex-shrink`, and `flex-basis`. It helps to control and distribute space between items.
 - While this project helped me to better visualize the grow/shrink basis, it didn't go too in depth on flex. Luckily, Wes Bos also offers a [CSS Flexbox](https://flexbox.io/) course that I plan to take to level up my CSS understanding.
 
  ```css
  .panel {
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}
  
 .panel > * {
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

  ```
  
### 2. Child Combinator & `*` CSS Selector
 - A [child combinator](https://css-tricks.com/almanac/selectors/c/child/) is the `>` symbol. It helps to select direct descendants of an element. Combined with `*`, it selects *all* direct descendants.
 - In our case, we used it to apply styles to all the direct descendants of elements with a `.panel` class. As a result, all of the text elements in each of the panels had the same base styling.
 
  ```css
 .panel > * {
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Applies only to the first descendant */
.panel > *:first-child {
  transform: translateY(-100%);
}

/* Applies only to the last descendant */
.panel > *:last-child {
  transform: translateY(100%);
}

  ```
 
 ### 3. Adding Border Styling to Elements
  - Adding a simple `border: 1px solid red` temporarily to a CSS element can really help you see what you're working with, and how the element is changing as you add or remove styles.
  - I've heard of people suggesting this method before, so it was cool to see Wes Bos suggest the same strategy. I definitely found this very useful!
 

 
 
 
 
 
