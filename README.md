# DOMosaur

### Introduction

We'll be writing code that will turn [this page with no JavaScript](https://domosaur.surge.sh) into [this page with lots of interactivity](https://domosaur-solution.surge.sh).


### Guidelines

* You will be working with JavaScript ONLY for this project. You can (and should) refer to the CSS and HTML files, but you will do all of your work in `main.js`.
* All DOM elements AND functions should be stored in `const` variables. We won't need to reassign any of those!
* You must put all functions in variables and pass them into `addEventListener`. No anonymous functions for now. They should all have names! See the example below, and stick to that format.


### An Example For Reference

What are the steps needed for this?

1. Query the item we want to put a listener on.

` const heading = document.querySelector('h1');`

Remember that any CSS selector will work, not just tag names!

2. Write the listener function that will run when that element is interacted with.

```javascript
const makeBold = function() {
  heading.fontWeight = 600;
}
```

Nothing wrong with hardcoding in what element we affect! (For now.)

3. Tell the browser that when the user clicks that element, we run that function.

`heading.addEventListener('click', makeBold);`

Note that sometimes we might want to run makeBold when something OTHER than `heading` is interacted with! That way we can allow interactivity with one element to affect another.


### And Now, Some Warmup Challenges

Flex your querySelectors!

1. Change the span with the class `mess-with-me` to have a font size of 3em.

2. Change the paragraph with the class `mess-with-me` to have a background color of green.

3. Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. You probably don't have this memorized, nor will you figure it out if you don't. Look up the CSS rule for that!
4. Change the first dinosaur image so that the image's dimensions are 324 pixels wide.


### Event Listener Challenges

1. Add an event listener to the span with the class `mess-with-me` so that when it is clicked, the font color changes to orange.

2. Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.

3. Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.

4. Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.

5. Add an event listener to the dinosaur with the id `biggify` that, when HOVERED, grows the image to 200 pixels wide. Note that this is a different event, and you'll likely need to do some research on what different string you'll need to pass. It's not gonna be `click`!


### Stretch Goals

1. Make it so that when you click the "Switch Background Color" button, you switch it back and forth from white to whatever color you chose. This doesn't require another event listener, but, rather, a rewrite of the function you made into your event listener.
2. Add a new event listener so that when the `biggify` dinosaur is no longer hovered, they changes back to their original size.
