// Object.FromEntries is a rever method of Object.enties
// It transforms a list of key-value pairs into an object.
const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }

// syntax
Object.fromEntries(iterable);

// examples
// converting map to an object
const map = new Map([['foo', 'bar'], ['baz', 42]]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }

// coverting an array to an object
const arr = [['0', 'a'], ['1', 'b'], ['2', 'c']];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }

// Object transformations
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
    Object.entries(object1)
        .map(([key, val]) => [key, val * 2])
);

console.log(object2);
// { a: 2, b: 4, c: 6 }