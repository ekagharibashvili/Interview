# History API
### The DOM Window object provides access to the browser's session history through the history object.
### It has useful methods and properties that let you navigate and manipulate of the history stack.

### Window.history 
#### The Window.history read-only property returns a reference to the History Object which provides an interface for manipulating the browser session history.(pages visited in the tab or frame that the current page is loadid i )
### history.back();     // equivalent to clicking back button
### history.go(-1);     // equivalent to history.back();

# Concept and usage
### Moving backward and forward trough the user's history is done using the back(), forward(), and go() methods.

#### Moving forward and backward
##### To move backward trough history:
##### window.history.back() - acts exactly as if the user clicked on the Back button in their browser toolbar.

##### Similarly, you can move forward(as id the user clicked the forward button), like this
##### window.history.forward()

## Moving to a specific point in history
### You can use the go() method to load a specific page from session history. identified by its relative position to the current page.(The current page's relative position is 0.)
### To move back one page(the equivalent of calling back()):
### window.history.go(-1)
### To move forward a page just like calling forward():
### window.history.go(1)
### Similarly, you can move forward 2 pages by passing 2 and so forth.
### Another use for the go() method is refresh the current page by either passing 0, or by invoking it without an argument.
### window.history.go()

### You can determine the number of the pages in the history stack by looking at the value on the length property:
### let numberOfEntries = window.history.length

## Interfaces
### History - Allows manipulation of the browser session history(that is, the pages visited in the tab or frame that the current page is loaded in)
