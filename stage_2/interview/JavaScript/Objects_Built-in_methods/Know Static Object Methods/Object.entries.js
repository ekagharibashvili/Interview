// Object.entries method returns an array of a given objects string-keyed property [key, value] pairs.
// this is the same of iterating with a for..in loop, except that for..in loop anumerates properties in the prototype chain as well.

const object1 = {
    a: 'somestring',
    b: 42
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"

// Syntax
Object.entries(obj)

// Description
/* Object.entries() returns an array
 whose elements are arrays corresponding to the 
 enumerable string-keyed property [key, value] pairs found directly upon object. The ordering  */


// polyfill 

// if some browsers don't support this method u can use code below
if (!Object.entries) {
    Object.entries = function (obj) {
        var ownProps = Object.keys(obj),
            i = ownProps.length,
            resArray = new Array(i); // preallocate the Array
        while (i--)
            resArray[i] = [ownProps[i], obj[ownProps[i]]];

        return resArray;
    };
}

// example
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// returns an empty array for any primitive type except for strings (see the above example), since primitives have no own properties
console.log(Object.entries(100)); // [ ]

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});

// Converting an Object to a Map

/* The new Map() constructor accepts an iterable of entries. With 
Object.entries, you can easily convert from Object to Map: */

// Iterating through an Object
// Using Array Destructuring, you can iterate through objects easily.
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"