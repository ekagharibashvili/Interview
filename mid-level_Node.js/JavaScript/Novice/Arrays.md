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

<h3>Array length</h3>
<p>length is a property which indicates number of element in the array, include empty elements, we can easily change array length if this property is writable or configurable. The value of the property can  be zero to 2^32 and it is positive number</p>

```js
const listA = [1,2,3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

listB.length = 4294967296; //2 to the 32nd power = 4294967296
// RangeError: Invalid array length

const listC = new Array(-100) //negative sign
// RangeError: Invalid array length

```

<h3>Know how Array length property works</h3>
<p>array length property works with dense and sparse arrays. With dense arrays it counts exact elements, but in sparse array it also counts empty paces: Examples below</p>
<h4><i>dense array</i></h4>

```js
var fruits = ['orange', 'apple', 'banana']; //fruits is a dense array  
fruits.length // prints 3, the real count of elements

fruits.push('mango');  
fruits.length // prints 4, one element was added

var empty = [];  
empty.length // prints 0, empty array  
```

<h4><i>sparse array</i></h4>

```js
var animals = ['cat', 'dog', , 'monkey']; // animals is sparse  
animals.length // prints 4, but real number of elements is 3

var words = ['hello'];  
words[6] = 'welcome'; //the highest index is 6. words is sparse  
words.length //prints 7, based on highest index 
```
