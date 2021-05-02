# 🌮 Day 15 - LocalStorage

I need to stop saying which is my favorite project, because this one just got added to my list of favorites. Today, we got to learn about localStorage and event delegation through creating a simple checklist.

![localstorage-demo](https://i.ibb.co/qnqgMkJ/Screen-Shot-2021-05-02-at-5-56-39-PM.png)

# Demo Link
View demo [here](https://sandaiiyahh.github.io/JavaScript30/15-LocalStorage/index.html)

## What I Learned

### 1. localStorage
 - Did you know our browser has local storage space? [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) allows you to access and save values inside an object, right in your browswer!
 - Our star of this project, `localStorage` helped us save previously added tapas onto our checklist, so that if we were to refresh the page, the previous items still remain on the page.
  
```javascript
 let items = [{'text': 'salmon', 'done': false}, {'text': 'wine', 'done': false}]
 
 localStorage.setItem('items', JSON.stringify(items));   // 'items' will be the name of the key property in your localStorage object 
 localStorage.getItem('items');  // retrieving values associated with 'items' key property
 localStorage.removeItem('items');  // removing item with key 'items'
 

 ```
 
### 2. JSON.stringify vs JSON.parse
 - One thing to note is that `localStorage` only accepts *string* values. So these two methods definitely come in handy when using `localStorage`. 
 - [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) helps convert objects or values into a string while [`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) does the opposite and converts a string back into an object.
 
 ```javascript
 
 localStorage.setItem('items', JSON.stringify(items));
 
 items = JSON.parse(localStorage.getItem('items'));  // items is now an object again, ready for use in our code

 ```
 
### 3. Forms have a reset method
 - If you are using a form tag, you can actually clear an input with [`reset`](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_form_reset). 
 - This is super helpful if you are using vanilla JavaScript to create checklists, to do lists, and more!
 
 ```javascript
 
 addItems.addEventListener('submit', addItem);   // 'addItems' selects our form 
 
 function addItem(e) {
  e.preventDefault(); // prevents page from refreshing
  
  this.reset(); 
}

 ```

### 4. Event Delegation
 - Instead of attaching event listeners to an element that hasn't existed on the page yet, you can attach it on its parent element instead.
 - Wes Bos gave a wonderful analogy of explaining event delegation as a parent and its negligent children. The child doesn't know what to do with the event so the parent has to tell it what to do.
 - In our project, we needed to attach a click listener to potential tapas that didn't exist on the list yet. As a result, we used the parent element to delegate instructions to the child element that's being checked off.
 
```javascript
itemsList.addEventListener('click', toggleDone); // listen for click on the PARENT element

function toggleDone(e) {
  if (!e.target.matches('input')) return;  // checks to see if e.target is the child
  
  const index = e.target.dataset.index;    // delegates instruction
  items[index].done = !items[index].done;
  
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

 ```
 
 
