# Bubbling and capturing 
### Let's starts with an example.
### This handler is assigned to < div > but also runs if you click any nested tag like < em > or < code >:
### if you click on em, the handler on div runs
![bc](../../assets/bc.jpg)


## Bubbling
### The bubbling principle is simple
### When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other acestors.
### Let's say we have 3 nested elements FORM > DIV > P with a handler on each of them:
![bubbling](../../assets/bubbling.jpg)

### A click on the inner < p > first runs onclick:
### 1. On that < p > . 2. < div > 3. < form > 4. And so on upwards till the document object.
### So if we click on < p >, then we'll see 3 alerts p -> div -> form
