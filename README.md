# Domosaur

### Warm Up

* Change the span with the class `mess-with-me` to have a font size of 3em.
* Change the paragraph with the class `mess-with-me` to have a background color of light green.
* Change the first dinosaur image so that the image's dimensions are 324 pixels wide.
* Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. Look up how to do this if you don't know! (In other words, don't wrack your brain if you don't know it.)


### Event Listeners!

* Add an event listener to the first dinosaur so that when they are clicked, they receive a red border. Don't forget to create the function that will actually _do_ it!
* Add an event listener to the feathered dinosaur so that when they're clicked, their opacity goes down to half transparency.
* Add an event listener to the green plush T-Rex so that when they're clicked, they get a padding on the right of 100 pixels.obs
* Now we'll try having an event listener function modify something different from the target of the event. Give the "Switch Background Color" button an event listener so that when it's clicked, the browser runs a function to switch the background color of the entire row of dinosaurs. You'll have to both add the event listener and make the function it calls!
* Allow the button to switch the background color back to white. You can track which background color we're currently on with a variable, OR check the dom to see the current background color
* Now query any dinosaur you'd like and set an event listener to run when it's _hovered_. Instead of a `click` event, you'll have to use a mouse hovering event. Do some quick research on different events and try one or two! The function the event listener launches should make the image grow to 200 pixels wide when hovered. Should be only one line of code if you stored the DOM node in a variable above!
* STRETCH GOAL: Notice how the image doesn't shrink? Add another event listener (some kind of "mouse leaves" event?!) and write the accompanying function so that the image shrinks back to its original size when you're no longer hovering it.