<h3>Array literals</h3>
<p>Array literals are list of the expressions, which creates the array, enclosed in a pair of square brackets. It's length depends on the numbers in this list.</p>

```js
let arr = [1, 2, 3];
// arr.length => 3
```

<h3> Know several options how to create Array </h3>
<p>There is three ways to create an array: array literal, constructor and string splitting</p>

```js
// 'fruits' array created using array literal notation.
const fruits = ["Apple", "Banana"];
console.log(fruits.length);
// 2

// 'fruits' array created using the Array() constructor.
const fruits = new Array("Apple", "Banana");
console.log(fruits.length);
// 2

// 'fruits' array created using String.prototype.split().
const fruits = "Apple, Banana".split(", ");
console.log(fruits.length);
```
